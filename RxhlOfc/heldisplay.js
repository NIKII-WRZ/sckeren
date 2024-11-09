async function displayMenuAll(name, runtime) {
    const titles = {
        first: '*_`地RxhL OfficiaL - V15神`_*',
        murbug: '*_`地Murbug Menu神`_*',
        bugown: '*_`地Bug Own Menu神`_*',
        owner: '*_`地Owner Menu神`_*',
        tools: '*_`地Tools Menu神`_*',
        ddos: '*_`地Ddos Menu神`_*'
    };

    const finishDisplay = `
${titles.first}

*_女 Pengguna_*: ${name}
*_女 Creator_*: RxhL OfficiaL
*_女 Partner_*: -
*_女 Version Bot_*: 15.0
*_女 Status_*: Online selama ${runtime}

${titles.murbug}
*_女 Invcrash [ Bug Invisible ]_*
*_女 Tocrash [ Only 15 Msg ]_*
*_女 WaFreeze [ Stuck Logo ]_*
*_女 CarouselMsg [ Bug Carousel ]_*
*_女 RequestCall [ Bug Call ]_*
*_女 PayFreeze [ Freeze Kamuflase ]_*
*_女 CrashUi1 [ Attack Ui V1 ]_*
*_女 CrashUi2 [ Attack Ui V2 ]_*
*_女 CrashUi3 [ Attack Ui V3 ]_*
*_女 CrashUi4 [ Attack Ui V4 ]_*
*_女 CrashUi5 [ Attack Ui V5 ]_*
*_女 HardUi [ Last Level Ui Bug  ]_*
*_女 CrashIphone [ Only Ios ]_*
*_女 TypeBug [ List Bug ]_*

${titles.bugown}
*_女 TocrashOwn [ Only 15 Msg ]_*
*_女 OwnHardUi [ Last Level Ui Bug ]_*
*_女 OwnCrashIphone [ Only Ios ]_*
*_女 Pairing-Unli [ Only Own ]_*

${titles.owner}
*_女 Self_*
*_女 Public_*
*_女 Murbugcd_*
*_女 Delcache_*
*_女 Addowner_*
*_女 Addmurbug_*
*_女 Dellowner_*
*_女 Dellmurbug_*

${titles.tools}
*_女 Downloadvideo_*
*_女 Tomp3_*

${titles.ddos}
*_女 Ddosv1_*`;

    return finishDisplay;
}

async function displayResponeDoneBug(number, command) {
     const responseDone = `*_女 Sukses melakukan pengiriman bug ${command} Ke nomor ${number} 女_*`
     return responseDone
}

module.exports = { displayMenuAll, displayResponeDoneBug };