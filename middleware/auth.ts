// export default defineNuxtRouteMiddleware(async () => {
//   if (process.server) return
//   const { token } = useAuth()

//   const router = useRouter()
//   const currentRoute = router.currentRoute.value

//   if (!token.value && currentRoute.path !== '/login') {
//     // replaceで遷移
//     console.log('not logged in')
//     return await navigateTo('/login', { replace: true })
//   }
// })

export default defineNuxtRouteMiddleware(async () => {
  if (process.server) return
  const { $fireAuth } = useNuxtApp()

  if (!$fireAuth.currentUser) {
    alert('Not Logged In')
    return navigateTo('/login', { replace: true })
  }
})
