function password(obj) {
    if(obj.birthYear.toString().length < 4 || Object.keys(obj).length < 3){
        return 'invalid';
    }
      const siteFirst=obj.siteName.charAt(0).toUpperCase();
     const first=obj.siteName.slice(1);
     const siteUpperCaseName=siteFirst.concat(first);
     console.log(siteUpperCaseName);
     const password=`${siteUpperCaseName}#${obj.name}@${obj.birthYear}`;
     return password;
}

console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' } ))


