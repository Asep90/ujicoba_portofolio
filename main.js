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
function onSubmit(e){
  e.preventDefault()
  const email = $("#inp-email")
  const subject = $("#inp-subject")
  const message =$("#inp-message")

  if(!$(email).val()){
 alert("Email masih kosong")
  }else if(!$(subject).val()){
    alert("Subject masih kosong")
  }else if (!$(message).val()){
    alert("Message masih kosong")
  }else {
    alert(" Form Submit")
    $(email).val("")
    $(subject).val("")
    $(message).val("")

    
    
  }
}
  