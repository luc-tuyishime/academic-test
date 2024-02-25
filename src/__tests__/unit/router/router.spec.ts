import { mount } from "@vue/test-utils"
import router from "../../../router"

describe("Router", () => {
  it("Test router properly ", () => {
    const wrapper = mount(router)

    expect(wrapper.element).toMatchSnapshot()
  })
})
