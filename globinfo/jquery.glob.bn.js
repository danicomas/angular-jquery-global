(function($) {
    var cultures = $.global.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["bn"] = $.extend(true, {}, en, {
        name: "bn",
        englishName: "Bengali",
        nativeName: "বাংলা",
        language: "bn",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-%n","%n"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "টা"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': "-",
                ':': ".",
                firstDay: 1,
                days: {
                    names: ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],
                    namesAbbr: ["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],
                    namesShort: ["র","স","ম","ব","ব","শ","শ"]
                },
                months: {
                    names: ["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],
                    namesAbbr: ["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""]
                },
                AM: ["পুর্বাহ্ন","পুর্বাহ্ন","পুর্বাহ্ন"],
                PM: ["অপরাহ্ন","অপরাহ্ন","অপরাহ্ন"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    f: "dd MMMM yyyy HH.mm",
                    F: "dd MMMM yyyy HH.mm.ss",
                    M: "dd MMMM"
                }
            })
        }
    }, cultures["bn"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);