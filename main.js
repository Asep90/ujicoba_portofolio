function toggleDetail (e){
  const target = $(e.target)

  if ($(target).hasClass("active")){
    $(target).html("More Info").removeClass("active")
  }

    else{
      $(target).html("Less Info").addClass("active")
    }


  const asip = $(target).parents(".about-exp-item")
  const pasti = $(asip).children(".about-exp-item-detail")

  $(pasti).slideToggle()


  
}