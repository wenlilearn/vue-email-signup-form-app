import Form from '../Form.vue'
import {shallowMount} from '@vue/test-utils'

describe('Form.vue', () => {
  test('emits form-submitted when from is submitted', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, { mocks: {
      axios
    }
    })
    wrapper.find('button').trigger('submit')
    expect(wrapper.emitted('form-submitted').length).toBe(1)
  })

  test('sends post request with email on submit', () => {
    const axios = {
      post: jest.fn()
    }

    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })

    const input = wrapper.find('input[type="email"]')
    const email = 'email@gmail.com'
    input.setValue(email)
    wrapper.find('button').trigger('submit')
    const url = 'http://demo.com/validate'
    const expectedData = expect.objectContaining({
      email
    })

    expect(axios.post).toHaveBeenCalledWith(url, expectedData)
  })

  test('sends post request with enterCompetition checkbox value on submit', () => {
    const axios = {
      post: jest.fn()
    }

    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const url = 'http://demo.com/validate'
    wrapper.find('input[value="no"]').setChecked()
    wrapper.find('button').trigger('submit')

    expect(axios.post).toHaveBeenCalledWith(url, expect.objectContaining({
      enterCompetition: 'no'
    }))
  })
})
