(() => {
  if (document.documentElement.dataset.gruztimeEmergencyLead === '1') return;
  document.documentElement.dataset.gruztimeEmergencyLead = '1';

  const anchor = document.querySelector('.v3-calc-section') || document.querySelector('.process') || document.querySelector('.cases');
  if (!anchor) return;

  const style = document.createElement('style');
  style.id = 'gruztime-emergency-styles';
  style.textContent = `
    .emergency-section{padding:8px 0 66px}.emergency-shell{position:relative;overflow:hidden;border:1px solid #eadfdd;border-radius:22px;background:linear-gradient(135deg,#fff 0%,#fff 56%,#fff7f5 100%);box-shadow:0 18px 50px rgba(58,35,31,.07)}
    .emergency-shell:before{content:"";position:absolute;width:420px;height:420px;border-radius:50%;right:-175px;top:-210px;background:radial-gradient(circle,rgba(233,87,87,.12),rgba(233,87,87,0) 68%);pointer-events:none}
    .emergency-grid{position:relative;display:grid;grid-template-columns:.9fr 1.1fr;gap:0}.emergency-copy{padding:36px 38px 34px;border-right:1px solid #eee5e3}.emergency-kicker{display:inline-flex;align-items:center;gap:8px;margin-bottom:13px;padding:7px 10px;border-radius:999px;background:#fff0ee;color:#c94b44;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.emergency-kicker:before{content:"!";display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#e95757;color:white;font-size:12px}
    .emergency-copy h2{font-size:clamp(34px,3.5vw,50px);line-height:1.02;letter-spacing:-1.8px;margin:0 0 15px;max-width:560px}.emergency-copy h2 span{color:#d84f48}.emergency-lead{font-size:15px;line-height:1.6;color:#626a63;max-width:570px;margin:0 0 23px}.emergency-promise{display:grid;gap:10px;margin:0 0 25px}.emergency-promise div{display:flex;gap:10px;align-items:flex-start;font-size:12px;color:#39423a}.emergency-check{display:grid;place-items:center;flex:0 0 23px;width:23px;height:23px;border-radius:50%;background:#eef8ec;color:#238f20;font-weight:900}.emergency-note{padding:13px 14px;border:1px solid #e1e8df;border-radius:11px;background:#f8fbf7;font-size:11px;line-height:1.5;color:#586359}.emergency-note b{color:#253a28}
    .emergency-form-wrap{padding:32px 34px 30px;background:rgba(255,255,255,.72)}.emergency-form-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:17px}.emergency-form-head h3{font-size:22px;letter-spacing:-.6px;margin:0}.emergency-form-head p{font-size:10px;line-height:1.45;color:#7a827b;margin:0;max-width:320px}.emergency-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}.emergency-field{display:flex;flex-direction:column;gap:5px}.emergency-field.wide{grid-column:1/-1}.emergency-field span{font-size:10px;font-weight:800;color:#596159}.emergency-field input,.emergency-field select,.emergency-field textarea{width:100%;border:1px solid #dfe4df;border-radius:9px;background:#fff;padding:0 11px;font:inherit;font-size:12px;outline:none;transition:.18s}.emergency-field input,.emergency-field select{height:44px}.emergency-field textarea{min-height:76px;padding-top:11px;resize:vertical}.emergency-field input:focus,.emergency-field select:focus,.emergency-field textarea:focus{border-color:#78ca71;box-shadow:0 0 0 3px rgba(50,181,45,.08)}.emergency-field small{font-size:9px;color:#8a928b}.emergency-upload{position:relative;display:flex;align-items:center;gap:10px;min-height:50px;padding:9px 11px;border:1px dashed #cfd8ce;border-radius:9px;background:#fbfcfb;cursor:pointer}.emergency-upload input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer}.emergency-upload-icon{display:grid;place-items:center;width:31px;height:31px;border-radius:8px;background:#eef8ec;color:#238f20;font-weight:900}.emergency-upload-copy b{display:block;font-size:11px}.emergency-upload-copy span{font-size:9px;color:#838b84;font-weight:500}.emergency-upload.has-file{border-color:#7ccb74;background:#f5fbf4}.emergency-actions{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:3px}.emergency-consent{display:flex;align-items:center;gap:7px;font-size:9px;color:#7d857e}.emergency-consent input{accent-color:#32b52d}.emergency-submit{height:48px;min-width:220px;padding:0 22px;border:0;border-radius:9px;background:#e95757;color:#fff;font-weight:850;cursor:pointer;box-shadow:0 10px 24px rgba(233,87,87,.18);transition:.18s}.emergency-submit:hover{background:#d94c4c;transform:translateY(-1px)}.emergency-status{grid-column:1/-1;min-height:18px;font-size:11px}.emergency-status.bad{color:#c54848}.emergency-status.ok{color:#238f20}.emergency-invalid{border-color:#df6969!important}
    .emergency-fast{display:flex;align-items:center;gap:8px;margin-top:16px;font-size:10px;color:#8a5c58}.emergency-fast b{color:#c94b44}.emergency-pulse{width:8px;height:8px;border-radius:50%;background:#e95757;box-shadow:0 0 0 0 rgba(233,87,87,.35);animation:emergencyPulse 1.8s infinite}@keyframes emergencyPulse{70%{box-shadow:0 0 0 8px rgba(233,87,87,0)}100%{box-shadow:0 0 0 0 rgba(233,87,87,0)}}
    @media(max-width:960px){.emergency-grid{grid-template-columns:1fr}.emergency-copy{border-right:0;border-bottom:1px solid #eee5e3}.emergency-form-head{align-items:flex-start}}
    @media(max-width:620px){.emergency-section{padding-bottom:48px}.emergency-shell{border-radius:17px}.emergency-copy,.emergency-form-wrap{padding:25px 20px}.emergency-form{grid-template-columns:1fr}.emergency-field.wide,.emergency-actions,.emergency-status{grid-column:1}.emergency-form-head{display:block}.emergency-form-head p{margin-top:6px}.emergency-actions{flex-direction:column;align-items:stretch}.emergency-submit{width:100%}.emergency-copy h2{font-size:37px}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.className = 'emergency-section';
  section.id = 'emergency-rescue';
  section.innerHTML = `
    <div class="container">
      <div class="emergency-shell">
        <div class="emergency-grid">
          <div class="emergency-copy">
            <div class="emergency-kicker">Аварийный запуск объекта</div>
            <h2>Подрядчик <span>сорвал работы?</span><br>Подхватим объект.</h2>
            <p class="emergency-lead">Бригада не вышла, не хватает людей, срывается разгрузка или переезд? Не начинайте поиск заново. Пришлите нам текущие условия — быстро проверим задачу и возможность заменить подрядчика.</p>
            <div class="emergency-promise">
              <div><span class="emergency-check">✓</span><span><b>Сверим условия и объём.</b> Поймём, что реально нужно для запуска.</span></div>
              <div><span class="emergency-check">✓</span><span><b>Постараемся сохранить согласованный бюджет,</b> если объём и условия сопоставимы.</span></div>
              <div><span class="emergency-check">✓</span><span><b>Дадим конкретный ответ:</b> можем ли выйти, когда и каким составом.</span></div>
            </div>
            <div class="emergency-note"><b>Есть смета прошлого подрядчика?</b> Приложите файл или скрин. Это самый быстрый способ понять задачу без повторного длинного брифа.</div>
            <div class="emergency-fast"><span class="emergency-pulse"></span><span>Сценарий для ситуаций, когда <b>объект уже «горит»</b>.</span></div>
          </div>
          <div class="emergency-form-wrap">
            <div class="emergency-form-head"><h3>Перехватить объект</h3><p>Оставьте минимум данных. В тестовой версии сайта отправку в CRM подключим отдельно.</p></div>
            <form class="emergency-form" id="emergency-form" novalidate>
              <label class="emergency-field"><span>Компания *</span><input name="company" required placeholder="ООО «Компания»"></label>
              <label class="emergency-field"><span>Что случилось? *</span><select name="problem" required><option value="">Выберите</option><option>Бригада не вышла</option><option>Не хватает людей</option><option>Срывается разгрузка / погрузка</option><option>Срывается складской переезд</option><option>Подрядчик отказался от работ</option><option>Другое</option></select></label>
              <label class="emergency-field"><span>Когда нужны люди? *</span><input name="when" required placeholder="Сегодня 20:00 / завтра 08:00"></label>
              <label class="emergency-field"><span>Сколько человек</span><input name="people" inputmode="numeric" placeholder="Например: 12"></label>
              <label class="emergency-field wide"><span>Адрес объекта *</span><input name="address" required placeholder="Москва / Московская область, адрес"></label>
              <label class="emergency-field"><span>Текущий бюджет / смета</span><input name="budget" inputmode="numeric" placeholder="Например: 48 000 ₽"></label>
              <label class="emergency-field"><span>Телефон *</span><input name="phone" required inputmode="tel" placeholder="+7 (___) ___-__-__"></label>
              <label class="emergency-field wide"><span>Смета / скрин расчёта подрядчика</span><div class="emergency-upload" id="emergency-upload"><input name="estimate" type="file" accept="image/*,.pdf,.xlsx,.xls,.doc,.docx"><span class="emergency-upload-icon">↑</span><span class="emergency-upload-copy"><b id="emergency-file-name">Выбрать файл</b><span>PDF, Excel, документ или изображение</span></span></div><small>Файл нужен для быстрого сравнения условий. Фактическую передачу файла подключим вместе с CRM/почтой.</small></label>
              <label class="emergency-field wide"><span>Короткий комментарий</span><textarea name="comment" placeholder="Например: подрядчик должен был вывести 12 человек к 20:00, предупредил об отказе два часа назад"></textarea></label>
              <div class="emergency-actions"><label class="emergency-consent"><input type="checkbox" name="consent" required> Согласен с обработкой персональных данных</label><button class="emergency-submit" type="submit">Перехватить объект →</button></div>
              <div class="emergency-status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </div>`;

  if (anchor.classList.contains('v3-calc-section')) anchor.insertAdjacentElement('afterend', section);
  else anchor.parentNode.insertBefore(section, anchor);

  const form = section.querySelector('#emergency-form');
  const fileInput = form.querySelector('input[type="file"]');
  const upload = section.querySelector('#emergency-upload');
  const fileName = section.querySelector('#emergency-file-name');
  const status = section.querySelector('.emergency-status');

  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    upload.classList.toggle('has-file', Boolean(file));
    fileName.textContent = file ? file.name : 'Выбрать файл';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const ok = field.type === 'checkbox' ? field.checked : String(field.value || '').trim() !== '';
      if (field.type !== 'checkbox') field.classList.toggle('emergency-invalid', !ok);
      if (!ok) valid = false;
    });
    if (!valid) {
      status.className = 'emergency-status bad';
      status.textContent = 'Заполните обязательные поля и подтвердите согласие.';
      return;
    }
    status.className = 'emergency-status ok';
    status.textContent = 'Заявка сформирована. Сейчас это тестовый прототип: отправку данных и файла в CRM/почту нужно подключить отдельно.';
  });
})();