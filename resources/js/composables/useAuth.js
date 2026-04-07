import { ref, computed } from 'vue'

// Estado a nivel de módulo = compartido globalmente sin Pinia
const user = ref(JSON.parse(localStorage.getItem('support_user') || 'null'))
const token = ref(localStorage.getItem('support_token') || null)

const isLoggedIn = computed(() => !!token.value)

function login(userData, authToken, remember = false) {
    user.value = userData
    token.value = authToken
    if (remember) {
        localStorage.setItem('support_user', JSON.stringify(userData))
        localStorage.setItem('support_token', authToken)
    }
}

function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('support_user')
    localStorage.removeItem('support_token')
}

function updateUser(newData) {
    user.value = { ...user.value, ...newData }
    if (localStorage.getItem('support_token')) {
        localStorage.setItem('support_user', JSON.stringify(user.value))
    }
}

export function useAuth() {
    return { user, token, isLoggedIn, login, logout, updateUser }
}