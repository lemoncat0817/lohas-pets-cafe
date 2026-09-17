<template>
  <div>
    <PageHero
      eyebrow="Reservation"
      title="線上訂位"
      description="填寫以下表單送出訂位申請，我們會於營業時間內以 Email 與您確認。"
    />

    <section class="container-cafe grid gap-12 py-16 sm:py-20 lg:grid-cols-5">
      <div class="space-y-6 lg:col-span-2">
        <div class="rounded-2xl border border-border bg-card p-6">
          <h2 class="font-display text-lg font-bold text-foreground">
            訂位須知
          </h2>
          <ul class="mt-4 space-y-3 text-sm text-muted-foreground">
            <li class="flex gap-2">
              <Icon
                name="lucide:clock"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>本表單為<strong class="text-foreground">訂位申請</strong>，非即時確認；我們會盡快以 Email 回覆是否可安排。</span>
            </li>
            <li class="flex gap-2">
              <Icon
                name="lucide:calendar-x"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>每週一、二公休，這兩天無法預訂。</span>
            </li>
            <li class="flex gap-2">
              <Icon
                name="lucide:paw-print"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>歡迎攜帶友善親人的貓狗同行，請於表單告知數量以便安排合適座位。</span>
            </li>
            <li class="flex gap-2">
              <Icon
                name="lucide:users"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>單次訂位超過 12 位，請改以 Email（{{ site.email }}）與我們聯絡安排。</span>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-border bg-card p-6">
          <h3 class="font-display font-bold text-foreground">
            營業時間
          </h3>
          <ul class="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li
              v-for="row in site.hours"
              :key="row.day"
              class="flex justify-between gap-6"
            >
              <span>{{ row.day }}</span>
              <span class="tabular-nums">{{ row.time }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-3">
        <h2 class="font-display text-xl font-bold text-foreground">
          訂位申請表單
        </h2>
        <p class="mt-1 text-sm text-muted-foreground">
          帶著毛孩子一起，讓我們為您預留座位。
        </p>

        <form
          class="mt-6 space-y-5"
          @submit="onSubmit"
        >
          <input
            type="checkbox"
            name="botcheck"
            class="hidden"
            style="display: none;"
            tabindex="-1"
            autocomplete="off"
          >

          <div class="grid gap-5 sm:grid-cols-2">
            <FormField
              v-slot="{ componentField }"
              name="name"
            >
              <FormItem>
                <FormLabel>姓名</FormLabel>
                <FormControl>
                  <Input
                    placeholder="您的稱呼"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField }"
              name="phone"
            >
              <FormItem>
                <FormLabel>聯絡電話</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="09xx-xxx-xxx"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <FormField
            v-slot="{ componentField }"
            name="email"
          >
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="grid gap-5 sm:grid-cols-2">
            <FormField
              v-slot="{ componentField }"
              name="date"
            >
              <FormItem>
                <FormLabel>訂位日期</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    :min="todayStr"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField }"
              name="time"
            >
              <FormItem>
                <FormLabel>訂位時間</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <FormField
              v-slot="{ componentField }"
              name="partySize"
            >
              <FormItem>
                <FormLabel>用餐人數</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="例如：2"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField }"
              name="petCount"
            >
              <FormItem>
                <FormLabel>同行毛孩數量（選填）</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    max="6"
                    placeholder="例如：1"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <FormField
            v-slot="{ componentField }"
            name="notes"
          >
            <FormItem>
              <FormLabel>備註（選填）</FormLabel>
              <FormControl>
                <Textarea
                  rows="3"
                  placeholder="例如：毛孩體型、慶生需求、特殊座位需求..."
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button
            type="submit"
            size="lg"
            class="w-full rounded-full"
            :disabled="isSubmitting"
          >
            <Icon
              v-if="isSubmitting"
              name="lucide:loader-2"
              class="size-4 animate-spin"
            />
            {{ isSubmitting ? '送出中...' : '送出訂位申請' }}
          </Button>

          <p
            v-if="status === 'success'"
            class="flex items-center gap-2 text-sm text-primary"
          >
            <Icon
              name="lucide:check-circle-2"
              class="size-4"
            /> 申請已送出，我們會盡快與您確認訂位！
          </p>
          <p
            v-if="status === 'error'"
            class="flex items-center gap-2 text-sm text-destructive"
          >
            <Icon
              name="lucide:alert-circle"
              class="size-4"
            /> 送出失敗，請稍後再試或直接寄信給我們。
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/data/site'

useSeoMeta({
  title: '線上訂位',
  description: '填寫表單送出訂位申請，LOHAS Pets Café 會盡快與您確認。',
})

const todayStr = new Date().toISOString().slice(0, 10)

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, '請輸入至少 2 個字'),
    phone: z.string().min(8, '請輸入有效的聯絡電話').regex(/^[0-9+\-\s()]+$/, '電話格式不正確'),
    email: z.string().email('請輸入有效的 Email'),
    date: z.string().min(1, '請選擇日期'),
    time: z.string().min(1, '請選擇時間'),
    partySize: z.coerce.number({ message: '請輸入用餐人數' }).int().min(1, '至少 1 位').max(12, '單次訂位最多 12 位，超過請改用 Email 與我們聯絡'),
    petCount: z.coerce.number().int().min(0).max(6).optional().or(z.literal('').transform(() => undefined)),
    notes: z.string().optional(),
  }).superRefine((data, ctx) => {
    const selected = new Date(`${data.date}T00:00:00`)
    if (Number.isNaN(selected.getTime())) return

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selected < today) {
      ctx.addIssue({ code: 'custom', path: ['date'], message: '日期不能早於今天' })
      return
    }

    const day = selected.getDay()
    if (day === 1 || day === 2) {
      ctx.addIssue({ code: 'custom', path: ['date'], message: '週一、週二公休，請選擇其他日期' })
      return
    }

    if (!data.time) return
    const [h, m] = data.time.split(':').map(Number)
    if (Number.isNaN(h) || Number.isNaN(m)) return
    const minutes = (h * 60) + m
    const isWeekend = day === 0 || day === 6
    const openMinutes = isWeekend ? (10 * 60) : (11 * 60)
    const closeMinutes = isWeekend ? (21 * 60) : (20 * 60)
    if (minutes < openMinutes || minutes > closeMinutes) {
      ctx.addIssue({
        code: 'custom',
        path: ['time'],
        message: `營業時間為 ${isWeekend ? '10:00–21:00' : '11:00–20:00'}，請重新選擇時間`,
      })
    }
  }),
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema: formSchema })
const { status, submit } = useWeb3Form()

const onSubmit = handleSubmit(values =>
  submit({
    subject: `[LOHAS Pets Café 官網] ${values.name} 的訂位申請（${values.date} ${values.time}）`,
    ...values,
  }),
)
</script>
