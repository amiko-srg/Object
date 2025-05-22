function runPrompts() {
  let ism = prompt('Isming nima?');
  let familiya = prompt('Familiyang nima?');
  let yosh = prompt('Yoshing nechida?');
  let login = prompt('Loginingni kiriting:');
  let parol = prompt('Parolingni kiriting:');
  let location = prompt('Locatsiya');
  let sana = prompt('Tug‘ilgan sanang?');
  let boy = prompt('Bo‘ying qancha?');
  let id = prompt('ID kiriting:');
  let tel = prompt('Telefon raqamingiz:');

  const foydalanuvchi = {
    ism,
    familiya,
    yosh,
    login,
    parol,
    location,
    tugilgan_sana: sana,
    boy,
    id,
    telefon: tel
  };

  console.log(foydalanuvchi);
}


