<template>
  <div class="wrapper wrapper-full-page ">
    <div class="full-page register-page">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-5 ml-auto">
              <div class="info-area info-horizontal mt-5">
                <div class="icon icon-warning">
                  <i class="tim-icons icon-wifi"></i>
                </div>
                <div class="description">
                  <h3 class="info-title">Marketing</h3>
                  <p class="description">
                    We've created the marketing campaign of the website. It was
                    a very interesting collaboration.
                  </p>
                </div>
              </div>
              <div class="info-area info-horizontal">
                <div class="icon icon-primary">
                  <i class="tim-icons icon-triangle-right-17"></i>
                </div>
                <div class="description">
                  <h3 class="info-title">Fully Coded in HTML5</h3>
                  <p class="description">
                    We've developed the website with HTML5 and CSS3. The client
                    has access to the code using GitHub.
                  </p>
                </div>
              </div>
              <div class="info-area info-horizontal">
                <div class="icon icon-info">
                  <i class="tim-icons icon-trophy"></i>
                </div>
                <div class="description">
                  <h3 class="info-title">Built Audience</h3>
                  <p class="description">
                    There is also a Fully Customizable CMS Admin Dashboard for
                    this product.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-7 mr-auto">
              <div class="card card-register card-white">
                <div class="card-header">
                  <img
                    class="card-img"
                    src="/images/card-warning.png"
                    alt="Card image"
                  />
                  <h4 class="card-title">Register</h4>
                </div>
                <form
                  class="form"
                  @submit.prevent="register"
                  @keydown="form.onKeydown($event)"
                >
                  <div class="card-body">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="tim-icons icon-single-02"></i>
                        </div>
                      </div>
                      <input
                        v-model="form.name"
                        type="text"
                        name="name"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                        class="form-control"
                        placeholder="Full Name"
                      />
                      <has-error :form="form" field="name" />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="tim-icons icon-email-85"></i>
                        </div>
                      </div>
                      <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        class="form-control"
                      />
                      <has-error :form="form" field="email" />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="tim-icons icon-lock-circle"></i>
                        </div>
                      </div>
                      <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="tim-icons icon-lock-circle"></i>
                        </div>
                      </div>
                      <input
                        v-model="form.password_confirmation"
                        type="password"
                        name="password_confirmation"
                        :class="{
                          'is-invalid': form.errors.has('password_confirmation')
                        }"
                        class="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <!-- <div class="form-check text-left">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" />
                        <span class="form-check-sign"></span>
                        I agree to the
                        <a href="javascript:void(0)">terms and conditions</a>.
                      </label>
                    </div> -->
                  </div>
                  <div class="card-footer">
                    <!-- <a
                    href="javascript:void(0)"
                    class="btn btn-warning btn-lg btn-block mb-3"
                    >Register Account</a
                  > -->
                    <!-- Submit Button -->
                    <v-button
                      :loading="form.busy"
                      class="btn btn-warning btn-lg btn-block mb-3"
                    >
                      {{ $t("register") }}
                    </v-button>
                    <div class="pull-left">
                      <h6>
                        <router-link :to="{ name: 'login' }"
                          >Login Your Account</router-link
                        >
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import LoginWithGithub from "~/components/LoginWithGithub";

export default {
  layout: "basic",

  middleware: "guest",

  components: {
    LoginWithGithub
  },

  metaInfo() {
    return { title: this.$t("register") };
  },

  data: () => ({
    form: new Form({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register() {
      // Register the user.
      const { data } = await this.form.post("/api/register");

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true;
      } else {
        // Log in the user.
        const {
          data: { token }
        } = await this.form.post("/api/login");

        // Save the token.
        this.$store.dispatch("auth/saveToken", { token });

        // Update the user.
        await this.$store.dispatch("auth/updateUser", { user: data });

        // Redirect home.
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>
