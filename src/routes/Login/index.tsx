import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from '@tanstack/react-router'
import { Spade } from 'icons'
import { useForm } from 'react-hook-form'
import { useUserStore } from 'state'
import * as z from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  rememberMe: z.boolean(),
})

const defaultValues = {
  name: '',
  rememberMe: false,
}

type LoginFormValues = typeof defaultValues

export default function LoginForm() {
  const router = useRouter()
  const userStore = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const onSubmit = ({ name, rememberMe }: LoginFormValues) => {
    // 'name is required'
    if (!name) {
      return
    }

    userStore.setName(name, rememberMe)

    return router.navigate({ to: '/game' })
  }

  return (
    <div className="flex min-h-full h-[65vh] items-center justify-center px-12 dark:bg-stone-800">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-violet-900 dark:text-stone-100">
            Welcome to
          </h2>
          <p className="my-3 text-2xl font-bold text-gray-900 dark:text-violet-400">
            Point Poker
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                {...register('rememberMe')}
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-400 focus:ring-offset-1 dark:bg-zinc-700 dark:text-violet-100 dark:focus:ring-voilet-400"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-md text-gray-900 dark:text-gray-50"
              >
                Remember me
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex min-w-full justify-center rounded-md border border-transparent bg-violet-600 dark:bg-violet-900 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <span className="absolute inset-y-0 left-4 flex items-center pl-3">
                <Spade />
              </span>
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
