
const run = (locale = 'en-US') => {
  const now = new Date()

  const format = (options = {}) => {
    const formatter = new Intl.DateTimeFormat(locale, options)
  
    return formatter.format(now)
  }

  clear()

// DateStyles: full, long, medium, short
  if(selector.value === 'actualDate'){
    log("{ dateStyle: 'full' }", format({dateStyle: 'full'}))
    log("{ dateStyle: 'long' }", format({dateStyle: 'long'}))
    log("{ dateStyle: 'medium' }", format({dateStyle: 'medium'}))
    log("{ dateStyle: 'short' }", format({dateStyle: 'short'}))

    log(
      "{ day: '2-digit', month: '2-digit', year: '2-digit' }",
      format({ day: '2-digit', month: '2-digit', year: '2-digit' })
    )
  }

  // TimeStyle: full, long, medium, short
  if(selector.value === 'actualTime'){
    log("{ timeStyle: 'full' }", format({timeStyle: 'full'}))
    log("{ timeStyle: 'long' }", format({timeStyle: 'long'}))
    log("{ timeStyle: 'medium' }", format({timeStyle: 'medium'}))
    log("{ timeStyle: 'short' }", format({timeStyle: 'short'}))

    log(
      "{ hour: '2-digit', minute: '2-digit', second: '2-digit' }",
      format({ hour: '2-digit', minute: '2-digit', second: '2-digit' })
    )
  }

  // Year Styles: numeric, 2-digit
  if(selector.value === 'year'){
    log("{ year: 'numeric' }", format({year: 'numeric'}))
    log("{ year: '2-digit' }", format({year: '2-digit'}))
  }

  // Month Styles: numeric, 2-digit, long, short, narrow
  if(selector.value === 'month'){
    log("{ month: 'numeric' }", format({month: 'numeric'}))
    log("{ month: '2-digit' }", format({month: '2-digit'}))
    log("{ month: 'long' }", format({month: 'long'}))
    log("{ month: 'short' }", format({month: 'short'}))
    log("{ month: 'narrow' }", format({month: 'narrow'}))
  }

  // Day Styles: numeric, 2-digit
  if(selector.value === 'day'){
    log("{ day: 'numeric' }", format({day: 'numeric'}))
    log("{ day: '2-digit' }", format({day: '2-digit'}))
  }

  // Hour Styles: numeric, 2-digit
  if(selector.value === 'hours'){
    log("{ hour: 'numeric' }", format({hour: 'numeric'}))
    log("{ hour: '2-digit' }", format({hour: '2-digit'}))
  }

  // Minute Styles: numeric, 2-digit
  if(selector.value === 'minutes'){
    log("{ minute: 'numeric' }", format({minute: 'numeric'}))
    log("{ minute: '2-digit' }", format({minute: '2-digit'}))
  }

  // Second Styles: numeric, 2-digit
  if(selector.value === 'seconds'){
    log("{ second: 'numeric' }", format({second: 'numeric'}))
    log("{ second: '2-digit' }", format({second: '2-digit'}))
  }

  // Final FULL
  if(selector.value === 'full'){
    log(
      "{ day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }",
      format({ day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
    }
}

run()