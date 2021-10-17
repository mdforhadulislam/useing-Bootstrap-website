
    const contact_details = document.querySelector('header .header-contact-details')
    window.addEventListener('scroll', () => {
      const scrollyValue = window.scrollY
      if (scrollyValue > 0) {
        contact_details.style.marginTop = "-63px"
      } else {
        contact_details.style.marginTop = "0"
      }
    })
