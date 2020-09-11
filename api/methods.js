import Api from './index'

export default {
  testPosting() {
    const item = {
      text: 'Success!'
    }
    console.log(item)
    return Api().get('/', item)
  }
  // 他の処理も追加可能
}
