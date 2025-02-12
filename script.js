let elBtnSearch = document.querySelector('.serch-icon-wrapper')
let elInputSearch = document.querySelector('.header-site-search')

elBtnSearch.addEventListener('click',function(){
  elInputSearch.classList.add('db-block')


})
elBtnSearch.addEventListener('dblclick',function(){
  elInputSearch.classList.remove('db-block')
})
