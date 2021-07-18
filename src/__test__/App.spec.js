import App from '../App.vue'
import {shallowMount} from '@vue/test-utils'
import Modal from '../components/Modal.vue'
import { expect } from '@jest/globals'

describe('App.vue', () => {
  test('hides Modal when Modal emits close-modal', () => {
    const wrapper = shallowMount(App)
    wrapper.find(Modal).vm.$emit('close-modal')
    expect(wrapper.find(Modal).exists).toBe(false)
    expect(wrapper.vm.$data.displayModal).toBe(false)
  })
})
