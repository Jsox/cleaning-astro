import IMask from "imask";
import { useEffect, useRef } from "react";
import { MaterialSymbolsPhoneForwarded } from "./icons/phone";

export default function CallMe() {
  const phoneInput = useRef<HTMLInputElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!phoneInput.current || !btn.current) return;

    //Создаем маску в инпуте
    const phoneMask = IMask(phoneInput.current, {
      mask: "+{7}(000)000-00-00",
    });

    // Если ввели правлильно - кнопка активна
    function phoneInputHandler() {
      if (phoneInput.current && btn.current) {
        console.log(phoneMask.masked.isComplete);
        if (phoneMask.masked.isComplete) {
          btn.current.removeAttribute("disabled");
        } else {
          btn.current.setAttribute("disabled", "disabled");
        }
      }
    }

    // Отправляем номер телефона
    async function btnHandler(e: Event) {
      if (!phoneInput.current || !btn.current) return;
      e.preventDefault();
      btn.current.setAttribute("disabled", "disabled");
      phoneInput.current.setAttribute("disabled", "disabled");
      phoneInput.current.value = "";
      phoneInput.current.placeholder = "Приняли! Ждите обратного звонка!!!";
      btn.current.textContent = "ok!";
      const send = await fetch("/phoneRequest.php", {
        method: "POST",
        body: JSON.stringify({
          phone: phoneMask.unmaskedValue,
        }),
      });
    }

    // Обработчик события для инпута
    phoneInput.current.addEventListener("input", phoneInputHandler);
    // Обработчик события для кнопки
    btn.current.addEventListener("click", btnHandler);
  }, [phoneInput, btn]);
  // Считываем поле ввода
 
  




  return (
    <div className="subcribe-form z-1 mt-8">
      <form className="relative mx-auto max-w-xl">
        <MaterialSymbolsPhoneForwarded className="w-5 h-5 absolute top-[48%] -translate-y-1/2 left-4" />
        <input
          ref={phoneInput}
          type="text"
          name="phone"
          className="phoneMask pt-4 pr-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 pl-12"
          placeholder="Ваш номер телефона"
        />
        <button
          ref={btn}
          type="submit"
          disabled
          className="btn phoneMaskSubmit absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
        >
          Перезвоним
        </button>
      </form>
    </div>
  );
}
