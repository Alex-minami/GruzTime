// GruzTime calculator v1 — generated from the provided 2026 price list.
(() => {
  const panel = document.querySelector('.lead-panel#lead-form');
  if (!panel || panel.dataset.calculatorReady === '1') return;
  panel.dataset.calculatorReady = '1';

  const style = document.createElement('style');
  style.textContent = `
  .calculator-panel{padding:24px}.calculator-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.calculator-grid label{display:flex;flex-direction:column;gap:5px}.calculator-grid label>span{font-size:10px;font-weight:750;color:#596159;text-transform:uppercase;letter-spacing:.04em}.calculator-grid input,.calculator-grid select{height:44px;width:100%;border:1px solid #dfe4df;border-radius:8px;background:#fff;padding:0 11px;font:inherit;font-size:12px;outline:none}.calculator-grid input:focus,.calculator-grid select:focus{border-color:#82ca7a;box-shadow:0 0 0 3px rgba(49,181,44,.08)}.calculator-grid small{font-size:9px;color:#858d86;margin-top:-1px}.calc-button{width:100%;margin-top:14px}.calc-disclaimer{font-size:9px;color:#858d86;margin:8px 0 0}.calc-hidden{display:none!important}.calc-result{margin-top:18px;border-top:1px solid var(--line);padding-top:17px}.result-breakdown{display:grid;gap:7px}.result-breakdown>div{display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:12px;color:#626b63}.result-breakdown b{font-size:14px;color:#202620}.result-breakdown .result-total{margin-top:4px;padding-top:11px;border-top:1px solid var(--line);color:#222}.result-breakdown .result-total span{font-weight:750}.result-breakdown .result-total b{font-size:24px;color:var(--green-dark);letter-spacing:-.4px}.calc-details{font-size:10px;color:#858d86;line-height:1.45;margin:7px 0 14px}.offer-box{display:grid;grid-template-columns:1fr 210px;gap:18px;padding:18px;border-radius:13px;background:linear-gradient(135deg,#f0faed,#e7f7e3);border:1px solid #d4ebcf}.offer-kicker{display:block;font-size:9px;font-weight:850;text-transform:uppercase;letter-spacing:.1em;color:var(--green-dark);margin-bottom:5px}.offer-copy h3{font-size:16px;line-height:1.35;margin:0 0 12px;letter-spacing:-.2px}.offer-numbers{display:flex;gap:26px}.offer-numbers div{display:flex;flex-direction:column}.offer-numbers span{font-size:9px;color:#738073}.offer-numbers b{font-size:16px}.offer-numbers .discount-price b{font-size:22px;color:var(--green-dark)}.offer-action{border-left:1px solid #cfe4ca;padding-left:18px;display:flex;flex-direction:column;justify-content:center}.timer-label{font-size:9px;color:#738073}.timer{font-size:32px;line-height:1;font-weight:850;letter-spacing:-1px;color:#1e2c20;margin:4px 0 10px;font-variant-numeric:tabular-nums}.order-button{width:100%;font-size:12px;padding:0 12px}.offer-box.expired{background:#f7f8f7;border-color:#e4e7e4}.offer-box.expired .offer-kicker,.offer-box.expired .discount-price b{color:#6e776f}.offer-box.expired .timer{color:#7f8780}.order-form-wrap{margin-top:14px;border:1px solid var(--line);border-radius:12px;padding:16px}.order-intro{display:flex;justify-content:space-between;gap:22px;align-items:end;margin-bottom:12px}.order-intro h3{font-size:17px;margin:0}.order-intro p{font-size:10px;color:#7a837b;margin:0;max-width:360px}.compact-order{grid-template-columns:repeat(2,1fr)}.order-summary{font-size:10px;line-height:1.5;color:#687169;background:#f7f9f7;border-radius:8px;padding:9px 10px;margin-top:9px}.calc-invalid{border-color:#dc6a6a!important}.calc-form-status{font-size:11px;margin-top:8px;min-height:18px}.calc-form-status.success{color:#238f20}.calc-form-status.error{color:#c54848}
  @media(max-width:900px){.offer-box{grid-template-columns:1fr}.offer-action{border-left:0;border-top:1px solid #cfe4ca;padding:13px 0 0;align-items:flex-start}.order-button{width:auto}.offer-numbers{flex-wrap:wrap}}
  @media(max-width:620px){.calculator-panel{padding:18px}.calculator-grid{grid-template-columns:1fr}.offer-numbers{gap:16px}.order-intro{display:block}.order-intro p{margin-top:5px}.compact-order{grid-template-columns:1fr}.calculator-panel .form-footer{flex-direction:column;align-items:stretch}.calculator-panel .form-footer .btn{width:100%}}
  `;
  document.head.appendChild(style);

  panel.classList.add('calculator-panel');
  panel.innerHTML = `
    <div class="lead-head">
      <div><p class="eyebrow-green">Калькулятор по прайсу</p><h2>Рассчитать стоимость</h2></div>
      <p>Ориентировочный расчёт по действующему прайсу GruzTime. Минимальная оплата работ — 4 часа.</p>
    </div>
    <div class="calculator-grid">
      <label><span>Вид работ</span><select id="calc-service">
        <option value="unload">Погрузка / разгрузка фур и контейнеров</option>
        <option value="warehouse_move">Складской переезд</option>
        <option value="warehouse_light">Грузчики на склад — лёгкие работы</option>
        <option value="furniture">Разборка / сборка мебели</option>
        <option value="materials">Разгрузка и перенос стройматериалов</option>
        <option value="rigging">Такелажные работы</option>
        <option value="waste">Сбор, упаковка и вынос строительного мусора</option>
      </select></label>
      <label><span>Форма расчёта</span><select id="calc-tax">
        <option value="cash">Наличный расчёт</option><option value="vat5">С НДС 5%</option><option value="vat22">С НДС 22%</option>
      </select></label>
      <label><span>Количество сотрудников</span><input id="calc-people" type="number" min="1" max="200" value="4"></label>
      <label><span>Продолжительность работ, часов</span><input id="calc-hours" type="number" min="1" max="48" step="1" value="4"></label>
      <label><span>Расстояние за МКАД, км</span><input id="calc-km" type="number" min="0" max="500" step="1" value="0"><small>0 — объект в Москве / до МКАД</small></label>
      <label><span>Автотранспорт</span><select id="calc-vehicle"><option value="none">Без автомобиля</option><option value="porter">Porter 1 т</option><option value="gazelle">Газель 1,5 т</option><option value="truck5">Авто 5 т</option></select></label>
      <label class="vehicle-hours calc-hidden"><span>Автомобиль, часов</span><input id="calc-vehicle-hours" type="number" min="1" max="48" step="1" value="4"></label>
    </div>
    <button class="btn btn-primary calc-button" id="calculate-btn" type="button">Рассчитать стоимость</button>
    <p class="calc-disclaimer">Расчёт предварительный. Финальная стоимость зависит от фактического объёма, условий объекта и подтверждается менеджером.</p>
    <div class="calc-result calc-hidden" id="calc-result" aria-live="polite">
      <div class="result-breakdown">
        <div><span>Работы</span><b id="result-labor">—</b></div>
        <div id="vehicle-row" class="calc-hidden"><span>Автотранспорт</span><b id="result-vehicle">—</b></div>
        <div class="result-total"><span>Расчётная стоимость</span><b id="result-total">—</b></div>
      </div>
      <div class="calc-details" id="result-details"></div>
      <div class="offer-box" id="discount-offer">
        <div class="offer-copy">
          <span class="offer-kicker">Скидка за быстрое решение</span>
          <h3>Если нажать «Заказать» в течение 5 минут — зафиксируем скидку 5% от суммы расчёта. По рукам?</h3>
          <div class="offer-numbers"><div><span>Ваша экономия</span><b id="result-saving">—</b></div><div class="discount-price"><span>Цена со скидкой</span><b id="result-discount">—</b></div></div>
        </div>
        <div class="offer-action"><div class="timer-label">Скидка действует ещё</div><div class="timer" id="discount-timer">05:00</div><button class="btn btn-primary order-button" id="order-btn" type="button">Заказать со скидкой 5%</button></div>
      </div>
      <div class="order-form-wrap calc-hidden" id="order-form-wrap">
        <div class="order-intro"><h3>Зафиксировать расчёт</h3><p>Оставьте контакт — менеджер получит параметры расчёта и подтвердит стоимость.</p></div>
        <form id="calc-order-form" novalidate><input type="hidden" name="calculation" id="calculation-summary">
          <div class="form-grid compact-order">
            <label><span>Компания *</span><input name="company" required placeholder="ООО «Компания»"></label>
            <label><span>Контактное лицо *</span><input name="contact" required placeholder="Имя"></label>
            <label><span>Телефон *</span><input name="phone" required inputmode="tel" placeholder="+7 (___) ___-__-__"></label>
            <label><span>Комментарий</span><input name="comment" placeholder="Например: нужна ночная смена"></label>
          </div>
          <div class="order-summary" id="order-summary"></div>
          <div class="form-footer"><label class="agree"><input type="checkbox" required><span>Согласен с обработкой персональных данных</span></label><button class="btn btn-primary" type="submit">Отправить заявку</button></div>
          <div class="calc-form-status" aria-live="polite"></div>
        </form>
      </div>
    </div>`;

  const serviceRates = {
    unload:{label:'Погрузка / разгрузка фур и контейнеров',cash:720,vat5:813.6,vat22:921.6},
    warehouse_move:{label:'Складской переезд',cash:720,vat5:813.6,vat22:921.6},
    warehouse_light:{label:'Грузчики на склад — лёгкие работы',cash:720,vat5:813.6,vat22:921.6},
    furniture:{label:'Разборка / сборка мебели',cash:850,vat5:960.5,vat22:1088},
    materials:{label:'Разгрузка и перенос стройматериалов',cash:850,vat5:960.5,vat22:1088},
    rigging:{label:'Такелажные работы',cash:950,vat5:1073.5,vat22:1216},
    waste:{label:'Сбор, упаковка и вынос строительного мусора',cash:950,vat5:1073.5,vat22:1216}
  };
  const vehicles = {
    none:{label:'Без автомобиля'},
    porter:{label:'Porter 1 т',cash:{rate:1400,min:5600},vat5:{rate:1582,min:7910},vat22:{rate:1792,min:8960},km:30},
    gazelle:{label:'Газель 1,5 т',cash:{rate:1900,min:7600},vat5:{rate:2147,min:10735},vat22:{rate:2432,min:12160},km:40},
    truck5:{label:'Авто 5 т',cash:{rate:2400,min:9600},vat5:{rate:2712,min:13560},vat22:{rate:3072,min:21504},km:50}
  };
  const taxLabels={cash:'наличный расчёт',vat5:'НДС 5%',vat22:'НДС 22%'};
  const q=s=>panel.querySelector(s);
  const money=n=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(Math.round(n))+' ₽';
  const vehicleSelect=q('#calc-vehicle'), vehicleHours=q('.vehicle-hours');
  vehicleSelect.addEventListener('change',()=>vehicleHours.classList.toggle('calc-hidden',vehicleSelect.value==='none'));

  let current=null, ticker=null;
  const timerKey='gruztime_discount_deadline';
  const getDeadline=()=>{const saved=Number(sessionStorage.getItem(timerKey)||0);if(saved)return saved;const d=Date.now()+300000;sessionStorage.setItem(timerKey,String(d));return d;};

  function updateOffer(){
    if(!current)return;
    const deadline=Number(sessionStorage.getItem(timerKey)||0), left=Math.max(0,deadline-Date.now());
    const min=Math.floor(left/60000), sec=Math.floor((left%60000)/1000);
    q('#discount-timer').textContent=String(min).padStart(2,'0')+':'+String(sec).padStart(2,'0');
    const active=left>0; current.discountActive=active; q('#discount-offer').classList.toggle('expired',!active);
    if(active){q('#result-saving').textContent=money(current.total*.05);q('#result-discount').textContent=money(current.total*.95);q('#order-btn').textContent='Заказать со скидкой 5%';}
    else{q('#result-saving').textContent='Срок акции истёк';q('#result-discount').textContent=money(current.total);q('#order-btn').textContent='Заказать по расчёту';}
  }

  function calculate(){
    const service=serviceRates[q('#calc-service').value], tax=q('#calc-tax').value;
    const people=Math.max(1,Number(q('#calc-people').value)||1), hours=Math.max(1,Number(q('#calc-hours').value)||1), km=Math.max(0,Number(q('#calc-km').value)||0);
    const travelHours=km===0?0:(km<=50?1:2), billableHours=Math.max(4,hours+travelHours), laborRate=service[tax], labor=laborRate*people*billableHours;
    const vehicleKey=vehicleSelect.value; let vehicleCost=0, vehicleText='', vehicleBillHours=0;
    if(vehicleKey!=='none'){
      const v=vehicles[vehicleKey], vp=v[tax]; vehicleBillHours=Math.max(1,Number(q('#calc-vehicle-hours').value)||1);
      const timeCost=Math.max(vehicleBillHours*vp.rate,vp.min), distanceCost=km*v.km; vehicleCost=timeCost+distanceCost;
      vehicleText=v.label+': '+money(timeCost)+(km?' + '+km+' км × '+v.km+' ₽ = '+money(distanceCost):'');
    }
    const total=labor+vehicleCost;
    current={service,tax,people,hours,km,travelHours,billableHours,laborRate,labor,vehicleKey,vehicleCost,vehicleText,total,discountActive:true};
    getDeadline();
    q('#result-labor').textContent=money(labor);q('#result-total').textContent=money(total);q('#vehicle-row').classList.toggle('calc-hidden',vehicleKey==='none');if(vehicleKey!=='none')q('#result-vehicle').textContent=money(vehicleCost);
    let details=people+' чел. × '+billableHours+' оплачиваемых ч × '+laborRate.toLocaleString('ru-RU')+' ₽/ч ('+taxLabels[tax]+').';
    if(travelHours)details+=' Выезд за МКАД: +'+travelHours+' ч к общему времени персонала.'; if(vehicleText)details+=' '+vehicleText+'.';
    q('#result-details').textContent=details;q('#calc-result').classList.remove('calc-hidden');updateOffer();clearInterval(ticker);ticker=setInterval(updateOffer,1000);
  }
  q('#calculate-btn').addEventListener('click',calculate);

  q('#order-btn').addEventListener('click',()=>{
    if(!current)return;updateOffer();const finalTotal=current.discountActive?current.total*.95:current.total;
    const summary=[current.service.label,current.people+' чел.',current.billableHours+' оплачиваемых ч',taxLabels[current.tax],current.km?current.km+' км за МКАД':'Москва / до МКАД',current.vehicleKey!=='none'?vehicles[current.vehicleKey].label:'без автомобиля','Итого: '+money(finalTotal)+(current.discountActive?' (скидка 5% зафиксирована)':'')].join(' · ');
    q('#calculation-summary').value=summary;q('#order-summary').textContent=summary;q('#order-form-wrap').classList.remove('calc-hidden');q('#order-form-wrap').scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>q('input[name="company"]').focus(),400);
  });

  const form=q('#calc-order-form');
  form.addEventListener('submit',e=>{
    e.preventDefault();const status=q('.calc-form-status'), required=[...form.querySelectorAll('[required]')];let valid=true;
    required.forEach(field=>{const check=field.type==='checkbox'?field.checked:field.value.trim()!=='';if(field.type!=='checkbox')field.classList.toggle('calc-invalid',!check);if(!check)valid=false;});
    if(!valid){status.className='calc-form-status error';status.textContent='Заполните обязательные поля и подтвердите согласие.';return;}
    status.className='calc-form-status success';status.textContent='Заявка сформирована. В тестовой версии отправка в CRM ещё не подключена.';
  });
})();