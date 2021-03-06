const contact = [];

function validate (self) {
  try {
    const fieldLabel = self.parentNode.children[0].innerHTML;
    if (!self.value && fieldLabel === 'お名前') {
      throw new Error(fieldLabel + "を入力してください");
    }
    if (!self.value && fieldLabel === 'メールアドレス') {
      throw new Error(fieldLabel + "を入力してください");
    }
    if (!self.value && fieldLabel === 'お問い合わせ内容') {
      throw new Error(fieldLabel + "を入力してください");
    }
    if (fieldLabel === 'メールアドレス' && !/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(self.value)){
      throw new Error("正しいメールアドレスを入力してください");
    }
    self.parentNode.children[2].innerHTML = "";
    return true;
  } catch (err) {
    self.parentNode.children[2].innerHTML = err.message;
    return false;
  }
}

function validateAll () {
  const checkList = document.querySelectorAll('.require');
  let flag = 0;
  for (const field of checkList) {
    if (field.type === "button") continue;
      const result = validate(field);
    if(!result){
      flag = 1;
    }
  }
  const fieldList = document.querySelectorAll('.field input, .field textarea');
  const copyList = document.querySelectorAll('.fieldCheck');
  for(let i = 0; i<fieldList.length; i++){
    copyList[i].children[1].innerHTML = fieldList[i].value;
    contact.push(fieldList[i].value);
  }
  if(flag === 0){
    $('.modal').fadeIn();
  }
};

$('.close-botton, .overlay').on('click', function(){
  $('.modal').fadeOut();
});

function sendMail(){
  console.log('入りました。')
  $.ajax({
    url: 'https://us-central1-mailer-eb8a7.cloudfunctions.net/mailer',
    type: 'POST',
    data: {
        from: contact[5],
        to: 'uta.lovetan_7313@outlook.jp',
        title: 'UminWorldからの問い合わせ',
        text: contact[1] + contact[0] + '\n\n' + contact[2] + '\n\n' + contact[3] + '\n\n' + contact[4] + '\n\n' + contact[5]
    },
    dataType: 'json',
    success: finish,
    error: errHandle
  })
}

function finish(){
  window.location.href = './contact_done.html';
}

function errHandle(){
  alert('送信に失敗しました。もう一度お試しください。')
}

function backToTop(){
  window.location.href = './index.html';
}