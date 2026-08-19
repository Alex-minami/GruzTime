(() => {
  if (document.documentElement.dataset.gruztimeV3 === '1') return;
  document.documentElement.dataset.gruztimeV3 = '1';

  const GREEN = '#32b52d';
  const GREEN_DARK = '#238f20';
  const heroUrl = 'https://gruztime.com/_ipx/f_webp%2C%20avif/mock/hero/hero-1.jpg';
  const hero2Url = 'https://gruztime.com/_ipx/f_webp%2C%20avif/mock/hero/hero-2.jpg';

  const globalStyle = document.createElement('style');
  globalStyle.id = 'gruztime-v3-styles';
  globalStyle.textContent = `
    :root{--g:#32b52d;--gd:#238f20;--gs:#eef8ec;--ink:#111511;--muted:#697169;--line:#e4e9e4;--shadow:0 18px 50px rgba(25,52,27,.08)}
    body{color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased}.container{width:min(1280px,calc(100% - 48px));margin:auto}
    .header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(228,233,228,.92)}
    .nav{height:72px}.logo{font-size:27px}.menu{gap:25px}.menu a{font-size:13px}.phone{font-weight:800}.btn.green{background:var(--g);box-shadow:0 9px 24px rgba(50,181,45,.18)}.btn.green:hover{background:var(--gd)}
    .hero{background:linear-gradient(180deg,#fff,#fbfdfb);border-bottom:1px solid var(--line)}.hero-grid{grid-template-columns:1.03fr .97fr;gap:42px;min-height:570px;padding:34px 0}.hero h1{font-size:clamp(48px,4.7vw,68px);line-height:1.02;letter-spacing:-2.8px}.hero h1 em{color:var(--g)}.lead{font-size:17px;line-height:1.55;max-width:640px}.proof{gap:10px}.proof div{background:#fff;box-shadow:0 5px 16px rgba(20,45,22,.025)}.ico{background:var(--gs)}.business{background:var(--gs);border-color:#d7ebd3}.hero-actions .btn{min-height:49px}
    .hero-art{min-height:500px!important;display:flex!important;align-items:center!important;position:relative!important}.hero-art:before{content:"";position:absolute;inset:30px 5px;border-radius:28px;background:linear-gradient(145deg,#f6faf5,#eef5ed);border:1px solid #e3e9e3;box-shadow:var(--shadow)}.hero-art img{position:relative;z-index:2;width:100%;height:440px;object-fit:cover;object-position:67% center;border-radius:24px;filter:saturate(.96);mix-blend-mode:multiply}
    .section{padding:62px 0}.section h2{font-size:34px;letter-spacing:-1.2px;margin-bottom:28px}.fit{padding-top:42px}.fit-grid{gap:16px}.fit-card{min-height:178px;padding:18px 12px;border-radius:16px;transition:.22s;background:#fff}.fit-card:hover,.service:hover,.adv:hover{transform:translateY(-3px);box-shadow:var(--shadow)}.fit-card h3{font-size:14px}.v3-icon-box{width:82px;height:82px;margin:0 auto 9px;border-radius:18px;background:linear-gradient(145deg,#fafcfa,#eef5ed);display:grid;place-items:center}.v3-icon-box svg{width:57px;height:57px;stroke:#47b842;fill:#f0f8ef;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}
    .services{padding-top:24px}.service-grid{gap:16px}.service{padding:21px;border-radius:16px;min-height:220px;transition:.22s}.sico{width:42px!important;height:42px!important;border-radius:10px!important;background:var(--g)!important;display:grid!important;place-items:center!important}.sico svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.service h3{font-size:16px}.service p{line-height:1.55}.service a{font-size:25px}
    .advantages{padding-top:30px}.adv-grid{gap:12px}.adv{min-height:150px;border-radius:14px;padding:15px 13px;transition:.22s}.aico{width:34px!important;height:34px!important;border-radius:50%!important;background:var(--gs)!important;display:grid!important;place-items:center!important}.aico svg{width:18px;height:18px;stroke:var(--gd);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.adv h3{font-size:13px}.adv p{line-height:1.45}
    .process{padding-top:35px}.steps{gap:9px}.step{border-radius:14px;padding:17px;min-height:102px}.step .num{width:38px;height:38px;flex-basis:38px;border-radius:9px;background:var(--gs);color:var(--gd);box-shadow:inset 0 0 0 1px #d9ebd6}.arrow{color:#b9c2ba}
    .cases{padding-top:34px}.case-grid{gap:16px}.case{border-radius:16px;overflow:hidden;background:#fff;min-height:190px;box-shadow:0 6px 22px rgba(22,44,24,.025)}.case-art{min-height:190px;background-size:cover!important;background-position:center!important;position:relative}.case-art:before,.case-art:after{display:none!important}.case-art span{background:rgba(25,56,30,.72);padding:6px 8px;border-radius:6px;backdrop-filter:blur(5px)}.case:nth-child(1) .case-art{background-image:linear-gradient(180deg,transparent,rgba(24,56,28,.2)),url('${hero2Url}')!important}.case:nth-child(2) .case-art{background-image:linear-gradient(180deg,transparent,rgba(24,56,28,.2)),url('${heroUrl}')!important}.case:nth-child(3) .case-art{background-image:linear-gradient(135deg,#244829,#72b76d)!important}.case-copy{padding:17px}.case-copy h3{font-size:16px}
    .conversion{padding-top:32px}.conv-grid{grid-template-columns:360px 1fr;gap:16px}.nope{border-radius:16px;min-height:380px;padding:23px}.leadbox{border-radius:16px;padding:23px;background:#fff}.leadhead h2{font-size:28px}.formgrid input,.formgrid select,.formgrid textarea{border-radius:8px}.footer{padding-top:34px}

    /* Calculator */
    .v3-calc-section{padding:38px 0 64px}.v3-calculator{border:1px solid var(--line);border-radius:20px;background:#fff;box-shadow:var(--shadow);overflow:hidden}.v3-calc-head{display:flex;justify-content:space-between;gap:40px;align-items:end;padding:25px 28px 18px;border-bottom:1px solid var(--line)}.v3-calc-head h2{font-size:30px;margin:0;letter-spacing:-1px}.v3-calc-head p{font-size:12px;color:var(--muted);max-width:520px;margin:0}.v3-calc-grid{display:grid;grid-template-columns:1fr 1.08fr}.v3-controls{padding:26px 28px 28px;border-right:1px solid var(--line)}.v3-results{padding:26px 28px 28px;background:linear-gradient(180deg,#fbfdfb,#fff)}.v3-step-label{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:850;text-transform:uppercase;letter-spacing:.06em;margin:0 0 9px;color:#435045}.v3-step-label b{width:23px;height:23px;border-radius:7px;background:var(--gs);color:var(--gd);display:grid;place-items:center;font-size:11px}.v3-field{margin-bottom:18px}.v3-seg{display:flex;gap:8px;flex-wrap:wrap}.v3-seg button{border:1px solid #dfe5df;border-radius:9px;background:#fff;padding:9px 12px;font-size:12px;font-weight:750;cursor:pointer;color:#424a43}.v3-seg button.active{border-color:#74ca70;background:var(--gs);color:var(--gd);box-shadow:0 0 0 2px rgba(50,181,45,.06)}.v3-two{display:grid;grid-template-columns:1fr 1fr;gap:12px}.v3-control{display:flex;align-items:center;height:44px;border:1px solid #dfe5df;border-radius:9px;overflow:hidden;background:#fff}.v3-control button{width:42px;height:100%;border:0;background:#f7f9f7;font-size:18px;cursor:pointer;color:#3b443c}.v3-control input{width:100%;height:100%;border:0;text-align:center;font-weight:800;outline:none;font-size:14px}.v3-select{width:100%;height:44px;border:1px solid #dfe5df;border-radius:9px;background:#fff;padding:0 11px;font:inherit;font-size:12px;outline:none}.v3-help{font-size:10px;color:#889088;margin-top:6px}.v3-hidden{display:none!important}.v3-calc-btn{width:100%}.v3-card{border:1px solid var(--line);border-radius:13px;background:#fff;padding:14px 16px;margin-bottom:12px}.v3-result-row{display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:12px;color:#606860;margin:6px 0}.v3-result-row b{font-size:14px;color:#202620}.v3-result-row.total{border-top:1px solid var(--line);padding-top:12px;margin-top:11px}.v3-result-row.total span{font-weight:800;color:#202620}.v3-result-row.total b{font-size:28px;color:var(--gd);letter-spacing:-.8px}.v3-details{font-size:10px;color:#818981;line-height:1.45;margin:7px 0 0}.v3-offer{display:grid;grid-template-columns:1fr 210px;gap:18px;padding:18px;border-radius:14px;background:linear-gradient(135deg,#eef9eb,#e3f6df);border:1px solid #cfe9cb}.v3-offer-k{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--gd);font-weight:850}.v3-offer h3{font-size:17px;line-height:1.35;margin:5px 0 12px}.v3-offer-meta{display:flex;gap:30px;flex-wrap:wrap}.v3-offer-meta span{display:block;font-size:9px;color:#758075}.v3-offer-meta b{font-size:18px}.v3-offer-meta .discount b{font-size:25px;color:var(--gd)}.v3-timer-box{border-left:1px solid #cbe2c8;padding-left:18px;display:flex;flex-direction:column;justify-content:center}.v3-timer-label{font-size:9px;color:#748075}.v3-timer{font-size:36px;font-weight:900;letter-spacing:-1px;line-height:1;margin:4px 0 10px;font-variant-numeric:tabular-nums}.v3-order{width:100%;border:0}.v3-offer.expired{background:#f7f8f7;border-color:#e2e6e2}.v3-offer.expired .v3-offer-k,.v3-offer.expired .discount b{color:#707870}.v3-offer.expired .v3-timer{color:#777f77}.v3-order-form{display:none;margin-top:14px;border:1px solid var(--line);border-radius:13px;padding:16px;background:#fff}.v3-order-form.open{display:block}.v3-order-form h3{font-size:17px;margin:0 0 4px}.v3-order-form>p{font-size:10px;color:#788179;margin:0 0 12px}.v3-order-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.v3-order-grid input{height:42px;border:1px solid #dfe4df;border-radius:8px;padding:0 10px;font:inherit;font-size:12px}.v3-summary{font-size:10px;line-height:1.5;color:#657067;background:#f6f8f6;border-radius:8px;padding:9px 10px;margin-top:9px}.v3-order-foot{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:10px}.v3-consent{display:flex;gap:7px;align-items:center;font-size:10px;color:#737c74}.v3-status{font-size:11px;min-height:18px;margin-top:7px}.v3-status.bad{color:#c54848}.v3-status.ok{color:#238f20}.v3-invalid{border-color:#d96565!important}.v3-calc-note{font-size:9px;color:#8a928a;margin-top:8px}
    @media(max-width:1080px){.hero-grid{grid-template-columns:1fr 1fr}.hero-art img{height:400px}.v3-calc-grid{grid-template-columns:1fr}.v3-controls{border-right:0;border-bottom:1px solid var(--line)}.conv-grid{grid-template-columns:1fr}}
    @media(max-width:780px){.container{width:calc(100% - 28px)}.hero-grid{grid-template-columns:1fr;min-height:auto}.hero-art{min-height:350px!important}.hero-art:before{inset:5px}.hero-art img{height:330px}.fit-grid{grid-template-columns:repeat(2,1fr)}.service-grid,.adv-grid,.case-grid{grid-template-columns:1fr}.v3-calc-head{display:block}.v3-calc-head p{margin-top:7px}.v3-offer{grid-template-columns:1fr}.v3-timer-box{border-left:0;border-top:1px solid #cbe2c8;padding:13px 0 0}.v3-order-grid{grid-template-columns:1fr}.v3-order-foot{flex-direction:column;align-items:stretch}.v3-order-foot .btn{width:100%}}
    @media(max-width:520px){.section{padding:50px 0}.section h2{font-size:30px}.v3-calc-head,.v3-controls,.v3-results{padding-left:18px;padding-right:18px}.v3-two{grid-template-columns:1fr}.hero-actions{flex-direction:column}.hero-actions .btn{width:100%}}
  `;
  document.head.appendChild(globalStyle);

  const iconSvgs = {
    warehouse:'<svg viewBox="0 0 64 64"><path d="M8 27 32 12l24 15v27H8z"/><path d="M15 54V32h34v22M25 54V40h14v14"/></svg>',
    dc:'<svg viewBox="0 0 64 64"><path d="M6 29 28 15l22 14v24H6z"/><path d="M36 42h19l5 6v6H36z"/><circle cx="42" cy="54" r="4"/><circle cx="55" cy="54" r="4"/></svg>',
    factory:'<svg viewBox="0 0 64 64"><path d="M8 54V28l16 9V25l16 10V21l16 9v24z"/><path d="M14 18h7v10M38 11h7v13"/></svg>',
    retail:'<svg viewBox="0 0 64 64"><path d="M9 26h46v28H9zM7 19h50l-5 9H12z"/><path d="M18 27v-8M29 27v-8M40 27v-8M51 27v-8M18 54V38h13v16"/></svg>',
    truck:'<svg viewBox="0 0 64 64"><path d="M6 28h33v20H6zM39 34h11l8 9v5H39z"/><circle cx="18" cy="50" r="5"/><circle cx="49" cy="50" r="5"/></svg>'
  };

  const heroArt = document.querySelector('.hero-art');
  if (heroArt) heroArt.innerHTML = `<img src="${heroUrl}" alt="Складские погрузочно-разгрузочные работы GruzTime">`;

  const fitIcons = ['warehouse','dc','factory','retail','truck'];
  document.querySelectorAll('.fit-card .mini').forEach((node,i)=>{
    const wrap=document.createElement('div'); wrap.className='v3-icon-box'; wrap.innerHTML=iconSvgs[fitIcons[i]||'warehouse']; node.replaceWith(wrap);
  });

  const serviceIcons = [
    '<svg viewBox="0 0 24 24"><path d="M4 7h16v10H4zM8 4v3M16 4v3M8 17v3M16 17v3"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c0-4 2-6 5-6s5 2 5 6M11 20c0-4 2-6 5-6s5 2 5 6"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M3 11 12 4l9 7v9H3zM7 20v-6h10v6M8 9h8"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M7 7h10v10H7zM4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3"/></svg>'
  ];
  document.querySelectorAll('.service .sico').forEach((node,i)=>node.innerHTML=serviceIcons[i]||serviceIcons[0]);

  const advIcons = [
    '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2-5M4 4v5h5"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 20v-8h16v8M8 12V8h8v4M10 8V4h4v4"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h4"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 7h16v10H4zM9 10l6 2-6 2z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"/></svg>'
  ];
  document.querySelectorAll('.adv .aico').forEach((node,i)=>node.innerHTML=advIcons[i]||advIcons[0]);

  const menu = document.querySelector('.menu');
  if (menu && !menu.querySelector('a[href="#calculator"]')) {
    const a=document.createElement('a'); a.href='#calculator'; a.textContent='Калькулятор';
    const first=menu.querySelector('a'); if(first&&first.nextSibling) menu.insertBefore(a,first.nextSibling); else menu.appendChild(a);
  }
  const mobile = document.querySelector('.mobile');
  if (mobile && !mobile.querySelector('a[href="#calculator"]')) {
    const a=document.createElement('a'); a.href='#calculator'; a.textContent='Калькулятор'; mobile.insertBefore(a,mobile.children[1]||null);
  }

  const processSection = document.querySelector('.process');
  if (!processSection || document.querySelector('#calculator')) return;
  processSection.insertAdjacentHTML('beforebegin', `
    <section class="v3-calc-section" id="calculator"><div class="container"><div class="v3-calculator">
      <div class="v3-calc-head"><h2>Рассчитайте стоимость работ</h2><p>Ориентировочный расчёт по предоставленному прайсу GruzTime. Минимальная оплата персонала — 4 часа. Итоговая стоимость подтверждается менеджером.</p></div>
      <div class="v3-calc-grid"><div class="v3-controls">
        <div class="v3-field"><div class="v3-step-label"><b>1</b>Вид работ</div><div class="v3-seg" id="v3-service"><button class="active" data-value="unload">Погрузка / разгрузка</button><button data-value="warehouse_move">Складской переезд</button><button data-value="rigging">Такелаж</button><button data-value="materials">Стройматериалы</button></div></div>
        <div class="v3-field"><div class="v3-step-label"><b>2</b>Форма расчёта</div><div class="v3-seg" id="v3-tax"><button class="active" data-value="cash">Наличный</button><button data-value="vat5">С НДС 5%</button><button data-value="vat22">С НДС 22%</button></div></div>
        <div class="v3-two"><div class="v3-field"><div class="v3-step-label"><b>3</b>Количество людей</div><div class="v3-control"><button data-target="v3-people" data-delta="-1">−</button><input id="v3-people" type="number" min="1" value="4"><button data-target="v3-people" data-delta="1">+</button></div></div><div class="v3-field"><div class="v3-step-label"><b>4</b>Количество часов</div><div class="v3-control"><button data-target="v3-hours" data-delta="-1">−</button><input id="v3-hours" type="number" min="1" value="4"><button data-target="v3-hours" data-delta="1">+</button></div><div class="v3-help">Минимальная оплата — 4 часа</div></div></div>
        <div class="v3-two"><div class="v3-field"><div class="v3-step-label"><b>5</b>Расстояние за МКАД</div><div class="v3-control"><button data-target="v3-km" data-delta="-5">−</button><input id="v3-km" type="number" min="0" value="0"><button data-target="v3-km" data-delta="5">+</button></div><div class="v3-help">0 км — объект в Москве / до МКАД</div></div><div class="v3-field"><div class="v3-step-label"><b>6</b>Автомобиль</div><select class="v3-select" id="v3-vehicle"><option value="none">Без автомобиля</option><option value="porter">Porter, 1 т</option><option value="gazelle">Газель, 1,5 т</option><option value="truck5">Авто, 5 т</option></select><div class="v3-help" id="v3-vehicle-help">Автомобиль не выбран</div></div></div>
        <div class="v3-field v3-hidden" id="v3-vhours-wrap"><div class="v3-step-label"><b>7</b>Часы автомобиля</div><div class="v3-control"><button data-target="v3-vhours" data-delta="-1">−</button><input id="v3-vhours" type="number" min="1" value="4"><button data-target="v3-vhours" data-delta="1">+</button></div></div>
        <button class="btn green v3-calc-btn" id="v3-calculate" type="button">Рассчитать стоимость</button>
      </div><div class="v3-results">
        <div class="v3-card"><div class="v3-result-row"><span>Работы</span><b id="v3-labor">—</b></div><div class="v3-result-row v3-hidden" id="v3-vrow"><span>Автотранспорт</span><b id="v3-vcost">—</b></div><div class="v3-result-row total"><span>Итого без скидки</span><b id="v3-total">—</b></div><div class="v3-details" id="v3-details">Укажите параметры и нажмите «Рассчитать стоимость».</div></div>
        <div class="v3-offer" id="v3-offer"><div><div class="v3-offer-k">Скидка за быстрое решение</div><h3>Если нажать «Заказать» в течение 5 минут — зафиксируем скидку 5% от суммы расчёта. По рукам?</h3><div class="v3-offer-meta"><div><span>Ваша скидка</span><b id="v3-saving">—</b></div><div class="discount"><span>К оплате со скидкой</span><b id="v3-discount">—</b></div></div></div><div class="v3-timer-box"><div class="v3-timer-label">Скидка действует ещё</div><div class="v3-timer" id="v3-timer">05:00</div><button class="btn green v3-order" id="v3-order" type="button" disabled>Заказать со скидкой 5%</button></div></div>
        <div class="v3-order-form" id="v3-form"><h3>Зафиксировать расчёт</h3><p>Оставьте контакт — параметры расчёта сохранятся в заявке.</p><div class="v3-order-grid"><input id="v3-company" placeholder="Компания *"><input id="v3-contact" placeholder="Контактное лицо *"><input id="v3-phone" inputmode="tel" placeholder="Телефон *"><input id="v3-comment" placeholder="Комментарий"></div><div class="v3-summary" id="v3-summary"></div><div class="v3-order-foot"><label class="v3-consent"><input id="v3-consent" type="checkbox"> Согласен с обработкой персональных данных</label><button class="btn green" id="v3-submit" type="button">Отправить заявку</button></div><div class="v3-status" id="v3-status"></div></div>
        <div class="v3-calc-note">* Расчёт предварительный и не является офертой.</div>
      </div></div>
    </div></div></section>`);

  let service='unload', tax='cash', calc=null, deadline=0, ticker=null;
  const rates={
    unload:{label:'Погрузка / разгрузка',cash:720,vat5:813.6,vat22:921.6},
    warehouse_move:{label:'Складской переезд',cash:720,vat5:813.6,vat22:921.6},
    rigging:{label:'Такелажные работы',cash:950,vat5:1073.5,vat22:1216},
    materials:{label:'Разгрузка и перенос стройматериалов',cash:850,vat5:960.5,vat22:1088}
  };
  const vehicles={
    none:{label:'Без автомобиля'},
    porter:{label:'Porter 1 т',cash:{rate:1400,min:5600},vat5:{rate:1582,min:7910},vat22:{rate:1792,min:8960},km:30},
    gazelle:{label:'Газель 1,5 т',cash:{rate:1900,min:7600},vat5:{rate:2147,min:10735},vat22:{rate:2432,min:12160},km:40},
    truck5:{label:'Авто 5 т',cash:{rate:2400,min:9600},vat5:{rate:2712,min:13560},vat22:{rate:3072,min:21504},km:50}
  };
  const taxLabels={cash:'наличный расчёт',vat5:'НДС 5%',vat22:'НДС 22%'};
  const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)], money=n=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(Math.round(n))+' ₽';
  function bindSeg(id,setter){qa(id+' button').forEach(btn=>btn.addEventListener('click',()=>{qa(id+' button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');setter(btn.dataset.value);}));}
  bindSeg('#v3-service',v=>service=v); bindSeg('#v3-tax',v=>tax=v);
  qa('.v3-control button').forEach(btn=>btn.addEventListener('click',()=>{const input=q('#'+btn.dataset.target);input.value=Math.max(Number(input.min||0),Number(input.value||0)+Number(btn.dataset.delta));}));
  q('#v3-vehicle').addEventListener('change',e=>{const show=e.target.value!=='none';q('#v3-vhours-wrap').classList.toggle('v3-hidden',!show);q('#v3-vehicle-help').textContent=show?'Минимальная стоимость применяется автоматически':'Автомобиль не выбран';});
  function paintTimer(){if(!calc)return;const left=Math.max(0,deadline-Date.now()),m=Math.floor(left/60000),s=Math.floor((left%60000)/1000),active=left>0;q('#v3-timer').textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');q('#v3-offer').classList.toggle('expired',!active);calc.discountActive=active;q('#v3-saving').textContent=active?money(calc.total*.05):'Срок акции истёк';q('#v3-discount').textContent=money(active?calc.total*.95:calc.total);q('#v3-order').textContent=active?'Заказать со скидкой 5%':'Заказать по расчёту';}
  q('#v3-calculate').addEventListener('click',()=>{
    const people=Math.max(1,Number(q('#v3-people').value)||1), hours=Math.max(1,Number(q('#v3-hours').value)||1), km=Math.max(0,Number(q('#v3-km').value)||0), vkey=q('#v3-vehicle').value;
    const extra=km===0?0:(km<=50?1:2), billable=Math.max(4,hours+extra), rate=rates[service][tax], labor=people*billable*rate;
    let vehicleCost=0, vehicleText='';
    if(vkey!=='none'){const v=vehicles[vkey], vh=Math.max(1,Number(q('#v3-vhours').value)||1), p=v[tax], timeCost=Math.max(vh*p.rate,p.min), distanceCost=km*v.km; vehicleCost=timeCost+distanceCost; vehicleText=`${v.label}: ${money(timeCost)}${km?` + ${km} км × ${v.km} ₽ = ${money(distanceCost)}`:''}`;}
    calc={people,hours,km,extra,billable,rate,labor,vkey,vehicleCost,total:labor+vehicleCost,service,tax,discountActive:true};
    q('#v3-labor').textContent=money(labor); q('#v3-total').textContent=money(calc.total); q('#v3-vrow').classList.toggle('v3-hidden',vkey==='none'); if(vkey!=='none')q('#v3-vcost').textContent=money(vehicleCost);
    q('#v3-details').textContent=`${people} чел. × ${billable} оплачиваемых ч × ${rate.toLocaleString('ru-RU')} ₽/ч (${taxLabels[tax]}).${extra?` Выезд за МКАД: +${extra} ч к времени персонала.`:''}${vehicleText?' '+vehicleText+'.':''}`;
    deadline=Date.now()+300000; clearInterval(ticker); paintTimer(); ticker=setInterval(paintTimer,1000); q('#v3-order').disabled=false; q('#v3-form').classList.remove('open');
  });
  q('#v3-order').addEventListener('click',()=>{if(!calc)return;paintTimer();const final=calc.discountActive?calc.total*.95:calc.total; q('#v3-summary').textContent=[rates[calc.service].label,calc.people+' чел.',calc.billable+' оплачиваемых ч',taxLabels[calc.tax],calc.km?calc.km+' км за МКАД':'Москва / до МКАД',vehicles[calc.vkey].label,'Итого: '+money(final)+(calc.discountActive?' (скидка 5% зафиксирована)':'')].join(' · '); q('#v3-form').classList.add('open'); setTimeout(()=>q('#v3-company').focus(),100);});
  q('#v3-submit').addEventListener('click',()=>{const required=[q('#v3-company'),q('#v3-contact'),q('#v3-phone')];let ok=true;required.forEach(el=>{const valid=el.value.trim()!=='';el.classList.toggle('v3-invalid',!valid);if(!valid)ok=false;});if(!q('#v3-consent').checked)ok=false;const status=q('#v3-status');status.className='v3-status '+(ok?'ok':'bad');status.textContent=ok?'Заявка сформирована. В тестовой версии отправка в CRM ещё не подключена.':'Заполните компанию, контакт, телефон и подтвердите согласие.';});
})();