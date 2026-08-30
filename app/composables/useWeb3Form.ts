import { WEB3FORMS_ACCESS_KEY } from '@/data/site'

/**
 * Shared submit logic for both the contact and reservation forms — both post to
 * the same free Web3Forms endpoint (https://web3forms.com/), no backend needed.
 * Callers wrap `submit()` in their own `useForm().handleSubmit()` so vee-validate's
 * `isSubmitting` still tracks the pending request.
 */
export function useWeb3Form() {
  const status = ref<'idle' | 'success' | 'error'>('idle')

  async function submit(payload: Record<string, unknown>) {
    status.value = 'idle'
    try {
      const res = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
        method: 'POST',
        body: {
          access_key: WEB3FORMS_ACCESS_KEY,
          ...payload,
        },
      })
      status.value = res.success ? 'success' : 'error'
    }
    catch {
      status.value = 'error'
    }
  }

  return { status, submit }
}
