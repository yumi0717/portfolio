function sendMail(){
  $.ajax({
    url: 'https://us-central1-mailer-eb8a7.cloudfunctions.net/mailer',
    type: 'POST',
    data: {
        from: 'テスト',
        to: 'uta.lovetan_7313@outlook.jp',
        title: 'JSから',
        text: '送信できていますか'
    },
    dataType: 'json',
    success: finish,
    error: errHandle
  })
}