<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="聯絡我們"
      description="有任何用餐或合作上的問題，都歡迎透過下方表單與我們聯繫。"
    />

    <section class="container-cafe grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
      <div class="space-y-8">
        <div class="overflow-hidden rounded-2xl border border-border">
          <iframe
            :src="site.mapEmbedSrc"
            title="LOHAS Pets Café 地圖位置"
            class="h-72 w-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        <div class="space-y-5 rounded-2xl border border-border bg-card p-6">
          <div class="flex gap-3">
            <Icon
              name="lucide:map-pin"
              class="mt-1 size-5 shrink-0 text-primary"
            />
            <div>
              <h3 class="font-display font-bold text-foreground">
                餐廳地址
              </h3>
              <p class="mt-1 text-sm text-muted-foreground">
                {{ site.address }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ site.addressNote }}
              </p>
            </div>
          </div>
          <div class="flex gap-3">
            <Icon
              name="lucide:clock"
              class="mt-1 size-5 shrink-0 text-primary"
            />
            <div>
              <h3 class="font-display font-bold text-foreground">
                營業時間
              </h3>
              <ul class="mt-1 space-y-1 text-sm text-muted-foreground">
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
          <div class="flex gap-3">
            <Icon
              name="lucide:calendar-check"
              class="mt-1 size-5 shrink-0 text-primary"
            />
            <div>
              <h3 class="font-display font-bold text-foreground">
                預約方式
              </h3>
              <p class="mt-1 text-sm text-muted-foreground">
                {{ site.reservationNote }}
              </p>
            </div>
          </div>
          <div class="flex gap-3">
            <Icon
              name="lucide:mail"
              class="mt-1 size-5 shrink-0 text-primary"
            />
            <div>
              <h3 class="font-display font-bold text-foreground">
                電子信箱
              </h3>
              <p class="mt-1 text-sm text-muted-foreground">
                {{ site.email }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 class="font-display text-xl font-bold text-foreground">
          傳送訊息給我們
        </h2>
        <p class="mt-1 text-sm text-muted-foreground">
          我們會盡快透過 Email 回覆您。
        </p>

        <form
          class="mt-6 space-y-5"
          @submit="onSubmit"
        >
          <!-- Honeypot: invisible to people, bots that blindly fill every field trip it. -->
          <input
            type="checkbox"
            name="botcheck"
            class="hidden"
            style="display: none;"
            tabindex="-1"
            autocomplete="off"
          >

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

          <FormField
            v-slot="{ componentField }"
            name="petInfo"
          >
            <FormItem>
              <FormLabel>毛孩資訊（選填）</FormLabel>
              <FormControl>
                <Input
                  placeholder="例如：一隻中型犬"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="message"
          >
            <FormItem>
              <FormLabel>訊息內容</FormLabel>
              <FormControl>
                <Textarea
                  rows="4"
                  placeholder="想詢問的內容..."
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
            {{ isSubmitting ? '傳送中...' : '送出訊息' }}
          </Button>

          <p
            v-if="status === 'success'"
            class="flex items-center gap-2 text-sm text-primary"
          >
            <Icon
              name="lucide:check-circle-2"
              class="size-4"
            /> 訊息已送出，我們會盡快與您聯繫！
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
  title: '聯絡我們',
  description: '地址、營業時間與線上聯絡表單。',
})

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, '請輸入至少 2 個字'),
    email: z.string().email('請輸入有效的 Email'),
    petInfo: z.string().optional(),
    message: z.string().min(10, '請輸入至少 10 個字的訊息內容'),
  }),
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema: formSchema })
const { status, submit } = useWeb3Form()

const onSubmit = handleSubmit(values =>
  submit({
    subject: `[LOHAS Pets Café 官網] 來自 ${values.name} 的訊息`,
    ...values,
  }),
)
</script>
