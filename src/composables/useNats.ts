import { defineStore } from 'pinia'
import { uniqueId } from 'lodash'

export const useNats = defineStore('nats', () => {
  const nats = ref<UniNamespace.SocketTask>()

  function setNats(value: UniNamespace.SocketTask) {
    nats.value = value
  }

  // 开启监听
  async function subject(subject: string, callback?: (arg: UniNamespace.OnSocketMessageCallbackResult, id: string) => void, id: string = uniqueId('nats-subject-')) {
    if (!nats.value) {
      uni.showLoading({
        title: '正在连接中...',
      })
      let i: number
      await new Promise((resolve) => {
        i = setInterval(() => {
          if (nats.value) {
            uni.hideLoading()
            resolve(true)
            clearInterval(i)
          }
        }, 1000)
      })
    }

    nats.value?.send({
      data: JSON.stringify({
        type: 0, // 指令类型，0为订阅指令
        id,
        data: {
          subjects: [
            subject,
          ],
        },
      }),
    })

    // 判断callback是否是函数
    if (typeof callback === 'function') {
      if (id !== 'nats-subject-1') {
        setInterval(() => {
          nats.value?.send({
            data: 'ping',
          })
        }, 2000)
      }

      nats.value?.onMessage((res) => {
        if (res.data === 'pong')
          return

        try {
          const data = JSON.parse(res?.data)

          if (data?.id === id)
            callback(data, id)
        }
        catch (error) {
          console.log('🚀 ~ file: useNats.ts:59 ~ nats.value?.onMessage ~ error:', error)
        }
      })
    }

    return id
  }

  return { nats, setNats, subject }
})

export function initNats() {
  const { setNats } = useNats()
  const ws = uni.connectSocket({
    url: import.meta.env.VITE_API_WEB_SOCKET,
    method: 'GET',
    complete: () => { },
  })

  uni.onSocketOpen(() => {
    setNats(ws)
  })
}
