<template>
  <div class="wrapper wrapper-full-page ">
    <div class="full-page login-page ">
      <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
      <div class="content">
        <div class="container">
          <div class="col-lg-4 col-md-6 ml-auto mr-auto">
            <form
              class="form"
              @submit.prevent="login"
              @keydown="form.onKeydown($event)"
            >
              <div class="card card-login card-white">
                <div class="card-header">
                  <img src="/images/card-success.png" alt="" />
                  <h1 class="card-title">Login</h1>
                </div>
                <div class="card-body">
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
                      :class="{ 'is-invalid': form.errors.has('email') }"
                      class="form-control"
                      placeholder="Email"
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
                      placeholder="Password"
                      :class="{ 'is-invalid': form.errors.has('password') }"
                      class="form-control"
                    />
                    <has-error :form="form" field="password" />
                  </div>
                </div>
                <div class="card-footer">
                  <!-- Submit Button -->
                  <v-button
                    :loading="form.busy"
                    class="btn btn-success btn-lg btn-block mb-3"
                  >
                    Login
                  </v-button>

                  <!-- GitHub Login Button -->
                  <!-- <login-with-github /> -->
                  <!-- <a href="#pablo" class="btn btn-success btn-lg btn-block mb-3"
                    >Login</a
                  > -->
                  <div class="pull-left">
                    <h6>
                      <router-link :to="{ name: 'register' }">Create Account</router-link>
                    </h6>
                  </div>
                </div>
              </div>
            </form>
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
    return { title: this.$t("login") };
  },

  data: () => ({
    form: new Form({
      email: "",
      password: ""
    }),
    remember: false
  }),

  methods: {
    async login() {
      // Submit the form.
      const { data } = await this.form.post("/api/login");

      // Save the token.
      this.$store.dispatch("auth/saveToken", {
        token: data.token,
        remember: this.remember
      });

      // Fetch the user.
      await this.$store.dispatch("auth/fetchUser");

      // Redirect home.
      this.$router.push({ name: "home" });
    }
  }
};
</script>
