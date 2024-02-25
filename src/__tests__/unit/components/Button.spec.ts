import { mount } from "@vue/test-utils"
import DarkModeButton from "../../../components/DarkMode.vue"

describe("DarkModeButton", () => {
  it("Test button properly ", () => {
    const wrapper = mount(DarkModeButton)

    expect(wrapper.element).toMatchSnapshot()
  })
})
