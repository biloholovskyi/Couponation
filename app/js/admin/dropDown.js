class AdminDrop {
  // graph
  toggle() {
    document.querySelector('.dashboard .admin__content .general__block .general__statistic p img').classList.toggle('show');
    document.querySelector('.dashboard .admin__content .general__block .general__statistic .hover-block').classList.toggle('show');
  }

  filterToggle(e) {
    if (e.target.classList.contains('hover-block') || e.target.closest('.hover-block')) {
      return
    }

    document.querySelectorAll('.type-select-js').forEach(select => {
      if (select !== e.currentTarget) {
        select.classList.remove('show');
      }
    })

    const current = e.currentTarget;
    current.classList.toggle('show');
  }

  // calendar
  calRender() {
    // get current date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const selectMonth = document.querySelectorAll('.calendar-month option');
    const selectYear = document.querySelectorAll('.calendar-year option');

    selectMonth.forEach(m => {
      if (m.value.toString() === month.toString()) {
        m.setAttribute('selected', 'selected')
      } else {
        m.removeAttribute('selected');
      }
    })

    selectYear.forEach(y => {
      if (y.value.toString() === year.toString()) {
        y.setAttribute('selected', 'selected')
      } else {
        y.removeAttribute('selected');
      }
    })

    // render day in calendar
    this.calcRenderDay(month, year, day, true);
  }

  calcSwitchMonth(e) {
    // get current date
    const date = new Date();
    const day = date.getDate();

    const newYear = document.querySelector('.calendar-js-active .calendar-year').value;
    const newMonth = document.querySelector('.calendar-js-active .calendar-month').value;

    this.calcRenderDay(+newMonth, +newYear, day);
    this.draw(e, false)
  }

  calcRenderDay(month, year, day, first = false) {
    if(first) {
      document.querySelectorAll('.calendar-js').forEach(calendar => {
        const colBoxes = calendar.querySelectorAll('.calendar__body .column');
        const dayBoxes = calendar.querySelectorAll('.calendar__body .column .day');
        // clear calendar body
        dayBoxes.forEach(day => {
          day.classList.remove('current-day');
          day.classList.add('zero');
          day.innerHTML = ''
        });

        const daysInMonth = (month, year) => {
          return new Date(year, month, 0).getDate();
        }

        const days = daysInMonth(month, year);
        let weekNumber = 0;

        const dateCurrent = new Date();
        const currentMonth = dateCurrent.getMonth() + 1;
        const currentYear = dateCurrent.getFullYear();

        for (let i = 0; i < days; i++) {
          let dayCur = new Date(year, month - 1, i + 1).getDay();
          dayCur -= 1;

          if (dayCur < 0) {
            dayCur = 6;
          }
          // next week number
          if (dayCur === 0) {
            weekNumber++
          }

          const carDays = colBoxes[dayCur].querySelectorAll('.day');
          const carDayBox = carDays[weekNumber];
          carDayBox.classList.remove('zero');
          carDayBox.innerHTML = (i + 1).toString();

          if (day.toString() === (i + 1).toString() && currentMonth.toString() === month.toString() && year.toString() === currentYear.toString()) {
            carDayBox.classList.add('current-day')
          }
        }
      })
    } else {
      document.querySelectorAll('.calendar-js-active').forEach(calendar => {
        const colBoxes = calendar.querySelectorAll('.calendar__body .column');
        const dayBoxes = calendar.querySelectorAll('.calendar__body .column .day');
        // clear calendar body
        dayBoxes.forEach(day => {
          day.classList.remove('current-day');
          day.classList.add('zero');
          day.innerHTML = ''
        });

        const daysInMonth = (month, year) => {
          return new Date(year, month, 0).getDate();
        }

        const days = daysInMonth(month, year);
        let weekNumber = 0;

        const dateCurrent = new Date();
        const currentMonth = dateCurrent.getMonth() + 1;
        const currentYear = dateCurrent.getFullYear();

        for (let i = 0; i < days; i++) {
          let dayCur = new Date(year, month - 1, i + 1).getDay();
          dayCur -= 1;

          if (dayCur < 0) {
            dayCur = 6;
          }
          // next week number
          if (dayCur === 0) {
            weekNumber++
          }

          const carDays = colBoxes[dayCur].querySelectorAll('.day');
          const carDayBox = carDays[weekNumber];
          carDayBox.classList.remove('zero');
          carDayBox.innerHTML = (i + 1).toString();

          if (day.toString() === (i + 1).toString() && currentMonth.toString() === month.toString() && year.toString() === currentYear.toString()) {
            carDayBox.classList.add('current-day')
          }
        }
      })
    }
  }

  calShow(e) {
    document.querySelectorAll('.calendar-js-active').forEach(cal => cal.classList.remove('calendar-js-active'));
    e.currentTarget.classList.add('calendar-js-active');
    const firstInput = e.currentTarget.querySelector('.hover-block .input__section input:first-child');
    const lastInput = e.currentTarget.querySelector('.hover-block .input__section input:last-child');
    if (!lastInput.classList.contains('input-bill')) {
      firstInput.classList.add('input-bill');
    }
  }

  calSwitch(e) {
    document.querySelectorAll('input').forEach(input => input.classList.remove('input-bill'));
    e.currentTarget.classList.add('input-bill');
  }

  calcSetDate(e) {
    let year = document.querySelector('.calendar-js-active .calendar-year').value;
    let month = document.querySelector('.calendar-js-active .calendar-month').value;
    let day = e.currentTarget.innerHTML

    if (+month < 10) {
      month = `0${month}`
    }
    if (+day < 10) {
      day = `0${day}`
    }

    const stringDate = `${day}.${month}.${year}`;
    const fromInput = document.querySelector('.calendar-js-active .input__section input:first-child');
    const toInput = document.querySelector('.calendar-js-active .input__section input:last-child');

    const from = fromInput.classList.contains('input-bill');

    if (from) {
      fromInput.value = stringDate;

      // document.querySelectorAll('.calendar-js-active .day').forEach(day => day.classList.remove('add'));
      // e.currentTarget.classList.add('add');
      document.querySelector('.calendar-js-active').setAttribute('data-from', stringDate)
    } else {
      // check from date
      const fromDate = fromInput.value;
      if (fromDate === '') {
        return
      }
      const fromYear = fromDate.split('.')[2];
      const fromMonth = fromDate.split('.')[1];
      const fromDay = fromDate.split('.')[0];

      const curTime = new Date(year, month, day).getTime();
      const fromTime = new Date(fromYear, fromMonth, fromDay).getTime();
      if (curTime < fromTime) {
        return
      }
      toInput.value = stringDate;
    }
    this.draw(e, true);
  }

  draw(e, click = false) {
    const allDays = document.querySelectorAll('.calendar-js-active .day');
    allDays.forEach(day => day.classList.remove('add'));

    let year = document.querySelector('.calendar-js-active .calendar-year').value;
    let month = document.querySelector('.calendar-js-active .calendar-month').value;

    if (+month < 10) {
      month = `0${month}`
    }

    const fromInput = document.querySelector('.calendar-js-active .input__section input:first-child');
    const toInput = document.querySelector('.calendar-js-active .input__section input:last-child');

    const toDate = toInput.value.split('.');
    const fromDate = fromInput.value.split('.');

    const from = fromInput.classList.contains('input-bill');
    if (click) {
      if (from) {
        e.target.classList.add('add');
        toInput.value = '';
      } else {
        // if set to date
        if (+toDate[2] === +year) {
          if (+toDate[1] === +month) {
            if(+fromDate[2] === +year) {
              if(+fromDate[1] === +month) {
                allDays.forEach(day => {
                  if (day.innerHTML !== '') {
                    if (+day.innerHTML === +fromDate[0] || (+day.innerHTML > +fromDate[0] && +day.innerHTML < +toDate[0]) || +day.innerHTML === +toDate[0]) {
                      day.classList.add('add');
                    }
                  }
                })
              } else {
                // next month
                allDays.forEach(day => {
                  if (day.innerHTML !== '') {
                    if (+day.innerHTML === +toDate[0] || +day.innerHTML < +toDate[0]) {
                      day.classList.add('add');
                    }
                  }
                })
              }
            } else {
              // next Year
              allDays.forEach(day => {
                if (day.innerHTML !== '') {
                  if (+day.innerHTML === +toDate[0] || +day.innerHTML < +toDate[0]) {
                    day.classList.add('add');
                  }
                }
              })
            }
          }
        }
      }
    } else {
      // draw on change month or year
      if(fromInput.value === '') {
        return
      }

      if(toInput.value === '') {
        return
      }

      if(+fromDate[2] === +year) {
        if(+fromDate[1] === +month) {
          if(+toDate[2] === +year) {
            if(+toDate[1] === +month) {
              allDays.forEach(day => {
                if (day.innerHTML !== '') {
                  if (+day.innerHTML === +fromDate[0] || (+day.innerHTML > +fromDate[0] && +day.innerHTML < +toDate[0]) || +day.innerHTML === +toDate[0]) {
                    day.classList.add('add');
                  }
                }
              })
            } else {
              // next month
              allDays.forEach(day => {
                if (day.innerHTML !== '') {
                  if (+day.innerHTML === +fromDate[0] || +day.innerHTML > +fromDate[0]) {
                    day.classList.add('add');
                  }
                }
              })
            }
          } else {
            // next year
            allDays.forEach(day => {
              if (day.innerHTML !== '') {
                if (+day.innerHTML === +fromDate[0] || +day.innerHTML > +fromDate[0]) {
                  day.classList.add('add');
                }
              }
            })
          }
        } else if(+fromDate[1] < +month) {
          if(+toDate[2] > +year) {
            allDays.forEach(day => {
              if (day.innerHTML !== '') {
                day.classList.add('add');
              }
            })
          } else if(+toDate[2] === +year) {
            if(+toDate[1] > +month) {
              allDays.forEach(day => {
                if (day.innerHTML !== '') {
                  day.classList.add('add');
                }
              })
            } else if(+toDate[1] === +month) {
              allDays.forEach(day => {
                if (day.innerHTML !== '') {
                  if(+day.innerHTML === +toDate[0] || +day.innerHTML < +toDate[0]) {
                    day.classList.add('add');
                  }
                }
              })
            }
          }
        }
      } else if(+fromDate[2] < +year) {
        if(+toDate[2] === +year) {
          if(+toDate[1] > +month) {
            allDays.forEach(day => {
              if (day.innerHTML !== '') {
                day.classList.add('add');
              }
            })
          } else if(+toDate[1] === +month) {
            allDays.forEach(day => {
              if (day.innerHTML !== '') {
                if (+day.innerHTML === +toDate[0] || +day.innerHTML < +toDate[0]) {
                  day.classList.add('add');
                }
              }
            })
          }
        } else if(+toDate[2] > +year) {
          allDays.forEach(day => {
            if (day.innerHTML !== '') {
              day.classList.add('add');
            }
          })
        }
      }
    }
  }
}

export default AdminDrop;