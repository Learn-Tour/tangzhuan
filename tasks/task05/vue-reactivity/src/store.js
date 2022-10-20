import { reactive } from "vue";

export const store = reactive({
    login: {
        name: "",
        state: false
    },
    loginUser(user) {
        this.login.name = user
        this.login.state = !this.login.state
    }
})