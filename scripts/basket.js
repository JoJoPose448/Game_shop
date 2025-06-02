const products = [
  { id: 1, title: 'Sniper Elite: Resistance', img: 'https://www.shop-justforgames.com/cdn/shop/files/SER_PS5_Deluxe_3D_PEGI.png?v=1745420448' },
  { id: 2, title: 'Call of Duty: Modern Warfare III', img: 'https://playmag.com.ua/wp-content/uploads/2023/10/0fad291b77d911ee878a901b0ecbd5bf_0fad291c77d911ee878a901b0ecbd5bf-300x379.jpg' },
  { id: 3, title: 'Red Dead Redepmtion', img: 'https://playmag.com.ua/wp-content/uploads/2023/10/a43dd5006c2111ee878a901b0ecbd5bf_a43dd5016c2111ee878a901b0ecbd5bf-300x385.jpg' },
  { id: 4, title: 'Ghost of Tsushima', img: 'https://playmag.com.ua/wp-content/uploads/2022/03/fe936cf2fb6411eb95d274d435d503ab_fe936cf3fb6411eb95d274d435d503ab-300x385.jpg' },
  { id: 5, title: 'Cuphead', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65JCAX0FKcp_-TbbKbXU-EPTmcN0V0ghd9g&s' },
  { id: 6, title: 'Street Fighter 6', img: 'https://playmag.com.ua/wp-content/uploads/2023/06/6fb2878e06c811ee878a901b0ecbd5bf_9e13588f077211ee878a901b0ecbd5bf-300x384.jpg' },
  { id: 7, title: 'Armored Core VI: Fires of Rubicon – Launch Edition', img: 'https://playmag.com.ua/wp-content/uploads/2023/07/3c4a5935247c11ee878a901b0ecbd5bf_3c4a593e247c11ee878a901b0ecbd5bf-300x383.bmp' },
  { id: 8, title: 'Five Nights at Freddy’s: Security Breach', img: 'https://playmag.com.ua/wp-content/uploads/2022/09/59b973383d7a11ed878a901b0ecbd5bf_59b973393d7a11ed878a901b0ecbd5bf-300x386.jpg' },
  { id: 9, title: 'Mortal Kombat 11', img: 'https://showtime.ua/content/images/35/375x480l50nn0/75828725417453.jpeg' },
  { id: 10, title: 'Grand Theft Auto V', img: 'https://playmag.com.ua/wp-content/uploads/2022/07/48c753f1010411ed878a901b0ecbd5bf_48c753f2010411ed878a901b0ecbd5bf.jpg' },
  { id: 11, title: 'Call of Duty: Modern Warfare II', img: 'https://m.media-amazon.com/images/I/81AxS0QabcL._AC_SY200_QL15_.jpg' },
  { id: 12, title: 'God of War', img: 'https://playmag.com.ua/wp-content/uploads/2022/10/efe85cf1043411ed878a901b0ecbd5bf_5581a5974fa311ed878a901b0ecbd5bf.jpg' },
  { id: 13, title: 'Spyder Man 2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTfk10eUf7dxcDGUltpqdw4mQqh9F97K2eQ&s' },
  { id: 14, title: 'Stellar Blade', img: 'https://i.moyo.ua/img/products/5727/15_200.jpg?1719558893' },
  { id: 15, title: 'Ghost of Yotei', img: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/bf1842674b874fdba1366f827687323a_Medium.jpg' },
  { id: 16, title: 'Sonic: Shadow Generations', img: 'https://media.4rgos.it/s/Argos/4161684_R_SET?w=270&h=270&qlt=75&fmt.jpeg.interlaced=true' }
];

const panel = document.getElementById('checkoutPanel');

document.addEventListener('DOMContentLoaded', () => {
  function renderCheckout(products) {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'checkout-item';
      div.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <span>${product.title}</span>
        <button class="add-btn" onclick="toggleItem(this)">+</button>
      `;
      panel.appendChild(div);
    });
  }

  renderCheckout(products);

  const openBtn = document.querySelector('.btn_main-btn');
  if (openBtn && panel) {
    openBtn.addEventListener('click', function (e) {
      e.preventDefault();

      panel.classList.toggle('active');
      
      if (panel.classList.contains('active')) {
        // Добавляем форму, если ее еще нет
        if (!document.getElementById('orderForm')) {
          const form = document.createElement('form');
          form.id = 'orderForm';
          form.innerHTML = `
            <h3>Оформлення замовлення</h3>
            <label for="phone">Введіть номер телефону:</label>
            <input type="tel" id="phone" name="phone" placeholder="+380..." pattern="\\+?\\d{10,15}" required>
            <button type="submit" class="submit-btn">Підтвердити замовлення</button>
          `;
          panel.appendChild(form);

          // Обработчик отправки формы
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            const phoneInput = form.querySelector('#phone');
            if (phoneInput.checkValidity()) {
              alert(`Дякуємо! Ваш номер телефону: ${phoneInput.value}`);
              // Здесь можно добавить дальнейшую логику оформления заказа
              form.reset();
              panel.classList.remove('active');
              openBtn.textContent = 'Оформити замовлення';
            } else {
              phoneInput.reportValidity();
            }
          });
        }

        openBtn.textContent = 'Закрити панель';
      } else {
        // Убираем форму при закрытии панели
        const form = document.getElementById('orderForm');
        if (form) form.remove();
        openBtn.textContent = 'Оформити замовлення';
      }
    });
  }

  window.toggleItem = function (btn) {
    btn.classList.toggle('selected');
    btn.textContent = btn.classList.contains('selected') ? '✓' : '+';
  };
});
