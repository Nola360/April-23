const li_tabs = document.querySelectorAll('.tab_wrap ul li');
const all = document.querySelectorAll('.all');
const unread = document.querySelectorAll('.all.unread');
const sent = document.querySelectorAll('.all.sent');

li_tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    li_tabs.forEach((tab) => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');

    let li_tab_value = tab.getAttribute('data-li');
    console.log(li_tab_value);

    all.forEach(item => {
      item.style.display = 'none';
    })

    if (li_tab_value === 'all') {
      all.forEach(item => {
        item.style.display = 'flex';
      })
    } else if (li_tab_value === 'unread') {
      unread.forEach(item => {
        item.style.display = 'flex';
      })

    } else {
      sent.forEach(item => {
        item.style.display = 'flex';
      })
    }
  })
})