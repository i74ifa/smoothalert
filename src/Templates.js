export default {
  blurry: (props) => {
    return `<div class="test-template">
                </div>`
  },

  mushy: (props) => {
    let buttonRemove = `<button class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="vue-smoothalert__w-6" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>`
    return `
        <div class="smoothalert-mushy smoothalert__smoothalert">
            <span>${props.text}</span>
            ${(props.buttonRemove) ? buttonRemove : ''}
        </div>`
  },
  note: (props) =>
    `<div class="inline-flex items-center bg-white leading-none rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
            ${props.badge}
        </span>
        <span class="inline-flex px-2 text-pink-600">
            ${props.text}
        </span>
      </div>`,

  testName: (props) => `<div class="smoothalert__testName smoothalert__smoothalert">
                        <div class="smoothalert__testName-badge" >
                          ${props.icon}
                        </div>
                        <div class="smoothalert__testName-text">
                          ${props.text}
                        </div>
                      </div>
`

}