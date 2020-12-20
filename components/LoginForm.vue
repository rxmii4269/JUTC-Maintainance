<template>
  <div class="login col-sm-12 col-xl-4 col mr-5 my-5 ml-auto mx-lg-auto">
    <div class="bg-white rounded-xl p-4 py-5 shadow-lg">
      <form action="" method="post">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            class="form-control"
            name="username"
            required
            type="text"
          />
          <small id="emailHelpId" class="form-text text-muted"
            >firstname + lastname + ID number</small
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            class="form-control"
            name="password"
            required=""
            type="password"
            value=""
          />
        </div>
        <button
          type="submit"
          name="submit"
          class="btn login-btn text-white btn-md btn-block"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</template>
