<template>
  <div>
    <form class="" @submit="submit">
      <div class="grid place-items-center mb-10">
        <img
          src="/img/payment-types.png"
          alt="Payment types"
          width="400"
          class="max-w-full max-h-[50px] object-contain"
        />
      </div>
      <message-alert-widget
        class="mb-7"
        :message="errorMessage"
        v-if="errorMessage"
        :type="'error'"
      />
      <div class="form-group">
        <label class="input-label" for="">Business hook</label>
        <el-input
          :disabled="loading"
          placeholder="Name Surname"
          required
          v-model="hook"
        />
        <div class="text-xs text-red-600 py-1">{{hookMessage}}</div>
      </div>
      <div class="form-group">
        <label class="input-label" for="">Company name</label>
        <el-input
          :disabled="loading"
          placeholder="Name Surname"
          required
          v-model="companyName"
        />
      </div>
      <div class="form-group">
        <label class="input-label" for="">Name of card holder</label>
        <el-input
          :disabled="loading"
          placeholder="Name Surname"
          required
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label class="input-label" for="">Card Number</label>
        <el-input
          :disabled="loading"
          placeholder="0000-0000-0000-0000"
          :value="cardNumberWithDashes"
          @input="inputCardNumber"
          required
        />
      </div>
      <div class="grid gap-5 grid-cols-2">
        <div class="form-group">
          <label class="input-label" for="">Expiration Date</label>
          <el-input
            :disabled="loading"
            placeholder="MM/YY"
            required
            :value="expirationDateWithSlashes"
            @input="inputExpirationDate"
          />
        </div>
        <div class="form-group">
          <label class="input-label" for="">CVV</label>
          <el-input
            :disabled="loading"
            placeholder="000"
            required
            v-model="cvv"
            type="password"
            maxlength="3"
          />
        </div>
      </div>

      <div class="grid place-items-center mt-6">
        <button
          class="rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 px-6 disabled:bg-opacity-50"
          :disabled="loading"
        >
          <span class="inline-flex items-center gap-3">
            <span>Pay via Stripe</span>
            <transition name="fade" :duration="100">
              <span v-show="loading" class="animate-spin">
                <spinner-dotted-icon height="22" width="22" />
              </span>
            </transition>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
import MessageAlertWidget from '~/components/widgets/MessageAlertWidget.vue'
import login from '~/mixins/login'
import { ErrorHandler } from '~/components/functions/ErrorFunction'
import UserTypeEnum from '~/models/UserTypeEnum'

export default Vue.extend({
  components: { SpinnerDottedIcon, MessageAlertWidget },
  name: 'PackagePaymentTab',
  data() {
    return {
      loading: false,
      errorMessage: '',
      cardNumberWithDashes: '',
      name: '',
      cvv: '',
      cardId: undefined,
      expirationDateWithSlashes: '',
      hook: '@',
      hookMessage:'',
      companyName: ''
    }
  },
  props: {
    stagingPackageInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  async beforeMount() {
    !this.$auth.loggedIn ? this.notLoggedIn() : null
    // if (Object.keys(this.stagingPackageInfo).length < 1)
      // this.$nuxt.$router.go(-1)
  },
  computed: {
    ...mapState(['setPackage', 'createPackage']),
    packageData() {
      let newPackageData
      let {
        name,
        paperlink,
        teamMembers,
        monthlyPrice,
        id,
        isMonthly,
        userId,
        yearlyPrice,
        publicProfile,
        companyLedger,
        activationCode,
        cc,
        companyName,
        companyEmail,
      } = this.setPackage
      if (this.createPackage && this.createPackage == true) {
        newPackageData = {
          plan: isMonthly ? 'monthly' : 'yearly',
          action: 'subscribe',
          companyName,
          companyEmail,
          custom: {
            name,
            paperlink,
            teamMembers,
            publicProfile,
            companyLedger,
            cc,
          },
        }
        return newPackageData
      } else if (this.createPackage == false) {
        newPackageData = {
          packageId: id,
          action: 'subscribe',
          companyName,
          companyEmail,
          plan: isMonthly ? 'monthly' : 'yearly',
        }
        return newPackageData
      }
    },
    cardNumber() {
      return this.cardNumberWithDashes.replace(/-+/g, '')
    },
    expirationDateString() {
      return this.expirationDateWithSlashes.split('/').join('') || ''
    },
    expYear() {
      return this.expirationDateString.split('').splice(2, 4).join('')
    },
    expMonth() {
      return this.expirationDateString.split('').splice(0, 2).join('')
    },
  },
  methods: {
    notLoggedIn(){
      localStorage.setItem("package-not-loggedin", JSON.stringify(this.setPackage))
      localStorage.setItem("create-package-not-loggedin", this.createPackage)
      this.$nuxt.$router.push('/register')
    },
    inputCardNumber(val) {
      let temp = val.replace(/(-+)|([^0-9]+)/g, '')
      this.cardNumberWithDashes = (temp.match(/.{1,4}/g) || []).join('-')
    },
    inputExpirationDate(val) {
      let temp = val.replace(/\/+|[^0-9]+/g, '')
      if (temp.length > 4) return

      // Check if the month is greater than 12
      if (temp.length === 2) {
        if (Number(temp) > 12) temp = '0' + temp
        if (Number(temp) == 0) temp = '01'
      }

      if (temp.length == 4 && Number(temp.substring(2, 4)) == 0) {
        temp = temp.substring(0, 2) + '01'
      }

      let finalVal = (temp.match(/.{1,2}/g) || []).join('/')
      this.expirationDateWithSlashes = finalVal
    },
    updateCard(id, data) {
      return this.$axios.$patch(`/card/${id}`, data).catch((error) => {
        let message = ''
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          message = error.response.data.message
        } else {
          message = 'Server not reachable'
        }
        this.errorMessage = message
        this.loading = false
      })
    },

    async submit(event) {
      event?.preventDefault()

      if(this.hookMessage) return

      if (!this.expYear || !this.expMonth || isNaN(this.cvv)) {
        this.errorMessage = 'Please review the inputed information'
        return
      }

      //code to check if name contains special symbols
      var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
      this.errorMessage = 'Name not correct'
      if (format.test(this.name.trim())) return

      var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
      this.errorMessage = 'Company name not correct'
      if (format.test(this.companyName.trim())) return


      if (this.loading) return

      const userId = (this.$auth.user || { id: '' }).id

      const data = {
        card_holder_name: this.name,
        card_number: this.cardNumber,
        exp_year: this.expYear,
        exp_month: this.expMonth,
        cvv: this.cvv,
      }
      console.log(data)
      this.loading = true
      this.errorMessage = ''

      let proceedToPayment = false

      await this.$axios
        .$post('/cards', data)
        .then((response) => {
          console.log(response)
          let { id } = response
          this.cardId = id
          proceedToPayment = true
        })
        .catch(async ({ response }) => {
          this.errorMessage = ErrorHandler(response)
          this.loading = false
        })

      if (!proceedToPayment) {
        this.loading = false
        return
      }

      this.$axios
        .$post('/subscriptions', {
          ...this.packageData,
        })
        .then(async () => {
          this.$notify.success({
            title: 'Package Subscription',
            message: 'You have successfully subscribed for this package',
          })
          setTimeout(() => {
            this.$nuxt.$router.push('/dashboard')
          }, 1000)
        })
        .catch(async ({ response }) => {
          this.errorMessage = ErrorHandler(response)
          await this.$axios.$delete(`/cards/${this.cardId}`)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  mounted() {
    if (this.$auth?.user?.role == UserTypeEnum.TEAM) {
      this.errorMessage =
        'Proceeding to payment as a team member, payment may not reflect on the account. create a free account to access payment'
    }
  },
  watch: {
     "hook": function(){
      if(!this.hook.startsWith("@")) this.hookMessage = 'hook must start with @'
        this.$axios.get(`/users?hook=${this.hook}`)
        .then((response)=>{
          const { data } = response.data
          if (Array.isArray(data) && data.length) {
            console.log("not-empty",data)
          }
          this.hookMessage = ''
        })
        .catch((err)=>{
           this.hookMessage = err.message
        })
     }
  }
})
</script>

<style lang="scss" scoped>
form {
  @apply p-6 rounded-xl border-4 border-paperdazgreen-400 bg-white;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.input-label {
  @apply font-medium text-sm block;

  & + * {
    @apply mt-1;
  }
}

.form-group {
  &:not(:last-child) {
    @apply mb-5;
  }
}
</style>
