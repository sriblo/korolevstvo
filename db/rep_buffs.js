// База бафов на репутацию
// Источник: Korolevstvo/db/ (buffs.json, inventory.json)
//
// СТРУКТУРА:
//   group: 'council'  — совет (макс 4 одновременно, выбор качества white/green/blue)
//   group: 'seal'     — Королевская печать (1 слот, +25% Ведьмак)
//   group: 'unique'   — уникальный баф конкретной репутации (1 слот)
//
//   bonuses: { repId: pct } — % прибавка к очкам репутации
//   repId соответствует полям REPUTATIONS[*].id в rep_calc.html
//
// ИКОНКИ: visual → icons/{visual}.jpg или .png
// РАМКИ:  quality → frames/border_{none|low|medium|high|special|exclusive}.png

const REP_BUFFS = {

  // ─── СОВЕТЫ (council) ────────────────────────────────────────────────────
  // Можно использовать до 4 советов одновременно.
  // Все предметы одного качества дают одинаковые бонусы к репутации.

  council: {
    white: {
      bonuses: {
        vedmak:     7,
        gladiator:  5,
        zavoevatel: 17,
        vlast:      5,
        arxeolog:   5,
        hunter:     10,
        dresser:    13,
        guard:      17,
        exorcist:   100,
      },
      items: [
        { id: 'pirate_day_2013_reputation_boost_1', name: 'Совет белого попугая',  visual: 'parrot_weapon', ext: 'jpg', source: 'День Пирата' },
        { id: 'fair_zoo_boar_ticket_1',              name: 'Малый желудь',          visual: 'acorn',         ext: 'jpg', source: 'Ярмарка (Кабан)' },
        { id: 'fair_zoo_ork_ticket_1',               name: 'Малый окорок',          visual: 'ham',           ext: 'png', source: 'Ярмарка (Орк)' },
        { id: 'fair_zoo_turkey_ticket_1',            name: 'Малый жук',             visual: 'beetle',        ext: 'png', source: 'Ярмарка (Индюк)' },
      ],
    },
    green: {
      bonuses: {
        vedmak:     14,
        gladiator:  10,
        zavoevatel: 34,
        vlast:      6,
        arxeolog:   10,
        hunter:     20,
        dresser:    26,
        guard:      34,
        exorcist:   100,
      },
      items: [
        { id: 'pirate_day_2013_reputation_boost_5', name: 'Совет зеленого попугая', visual: 'parrot_weapon', ext: 'jpg', source: 'День Пирата' },
        { id: 'fair_zoo_boar_ticket_5',             name: 'Средний желудь',         visual: 'acorn',         ext: 'jpg', source: 'Ярмарка (Кабан)' },
        { id: 'fair_zoo_ork_ticket_5',              name: 'Средний окорок',         visual: 'ham',           ext: 'png', source: 'Ярмарка (Орк)' },
        { id: 'fair_zoo_turkey_ticket_5',           name: 'Средний жук',            visual: 'beetle',        ext: 'png', source: 'Ярмарка (Индюк)' },
      ],
    },
    blue: {
      bonuses: {
        vedmak:     21,
        gladiator:  15,
        zavoevatel: 51,
        vlast:      7,
        arxeolog:   15,
        hunter:     30,
        dresser:    39,
        guard:      51,
        exorcist:   100,
      },
      items: [
        { id: 'pirate_day_2013_reputation_boost_10', name: 'Совет синего попугая', visual: 'parrot_weapon', ext: 'jpg', source: 'День Пирата' },
        { id: 'fair_zoo_boar_ticket_10',             name: 'Большой желудь',       visual: 'acorn',         ext: 'jpg', source: 'Ярмарка (Кабан)' },
        { id: 'fair_zoo_ork_ticket_10',              name: 'Большой окорок',       visual: 'ham',           ext: 'png', source: 'Ярмарка (Орк)' },
        { id: 'fair_zoo_turkey_ticket_10',           name: 'Большой жук',          visual: 'beetle',        ext: 'png', source: 'Ярмарка (Индюк)' },
      ],
    },
  },

  // ─── КОРОЛЕВСКАЯ ПЕЧАТЬ (seal) ───────────────────────────────────────────
  // Только Ведьмак. Качество влияет лишь на длительность, бонус всегда +25%.
  // Источник: premium_scroll_3_* (buffs.json)

  seal: {
    bonuses: { vedmak: 25 },
    items: [
      { id: 'premium_scroll_3_1_buff_item', name: 'Крохотная Королевская печать', quality: 'green',  visual: 'kingdom_seal_1', ext: 'png', duration_days: 0.04, source: 'Магазин рубинов' },
      { id: 'premium_scroll_3_3_buff_item', name: 'Малая Королевская печать',     quality: 'blue',   visual: 'kingdom_seal_1', ext: 'png', duration_days: 1,    source: 'Магазин рубинов' },
      { id: 'premium_scroll_3_7_buff_item', name: 'Средняя Королевская печать',   quality: 'purple', visual: 'kingdom_seal_1', ext: 'png', duration_days: 5,    source: 'Магазин рубинов' },
      { id: 'premium_scroll_3_14_buff_item',name: 'Большая Королевская печать',   quality: 'red',    visual: 'kingdom_seal_1', ext: 'png', duration_days: 10,   source: 'Магазин рубинов' },
    ],
  },

  // ─── УНИКАЛЬНЫЕ БАФЫ (unique) ────────────────────────────────────────────
  // По одному на репутацию, не суммируются между собой.

  unique: [

    // ── Гладиатор (Арена) ──
    {
      id: 'master_aren',
      name: 'Мастер Арены',
      quality: 'white',
      visual: 'master_aren',
      ext: 'png',
      source: 'Командорский клуб',
      type: 'percent',
      bonuses: { gladiator: 20 },
    },

    // ── Завоеватель ──
    {
      id: 'master_voiny',
      name: 'Мастер Войны',
      quality: 'white',
      visual: 'master_voiny',
      ext: 'png',
      source: 'Командорский клуб',
      type: 'multiplier',
      multiplier: 2,
      bonuses: { zavoevatel: null },
    },

    // ── Свитки Фаворита ─────────────────────────────────────────────────────
    // Источник: tournament_02_2011_reputation_* (buffs.json)
    // Длительность: 12 часов. visual: light_scroll
    // Стакаются с советами, но не между собой (одна репутация — один свиток).

    // Гладиатор: white=5%, green=10%, blue=15%, purple=20%
    { id: 'tournament_02_2011_reputation_gladiator_1', name: 'Свиток Фаворита', quality: 'white',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { gladiator: 5 } },
    { id: 'tournament_02_2011_reputation_gladiator_2', name: 'Свиток Фаворита', quality: 'green',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { gladiator: 10 } },
    { id: 'tournament_02_2011_reputation_gladiator_3', name: 'Свиток Фаворита', quality: 'blue',   visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { gladiator: 15 } },
    { id: 'tournament_02_2011_reputation_gladiator_4', name: 'Свиток Фаворита', quality: 'purple', visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { gladiator: 20 } },

    // Завоеватель: white=35%, green=70%, blue=100%, purple=135%
    { id: 'tournament_02_2011_reputation_conqueror_1', name: 'Свиток Фаворита', quality: 'white',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { zavoevatel: 35 } },
    { id: 'tournament_02_2011_reputation_conqueror_2', name: 'Свиток Фаворита', quality: 'green',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { zavoevatel: 70 } },
    { id: 'tournament_02_2011_reputation_conqueror_3', name: 'Свиток Фаворита', quality: 'blue',   visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { zavoevatel: 100 } },
    { id: 'tournament_02_2011_reputation_conqueror_4', name: 'Свиток Фаворита', quality: 'purple', visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { zavoevatel: 135 } },

    // Археолог: white=5%, green=7.5%, blue=10%, purple=12.5%
    { id: 'tournament_02_2011_reputation_archeolog_1', name: 'Свиток Фаворита', quality: 'white',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { arxeolog: 5 } },
    { id: 'tournament_02_2011_reputation_archeolog_2', name: 'Свиток Фаворита', quality: 'green',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { arxeolog: 7.5 } },
    { id: 'tournament_02_2011_reputation_archeolog_3', name: 'Свиток Фаворита', quality: 'blue',   visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { arxeolog: 10 } },
    { id: 'tournament_02_2011_reputation_archeolog_4', name: 'Свиток Фаворита', quality: 'purple', visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { arxeolog: 12.5 } },

    // Ведьмак: white=10%, green=15%, blue=20%, purple=25%
    { id: 'tournament_02_2011_reputation_witcher_1', name: 'Свиток Фаворита', quality: 'white',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { vedmak: 10 } },
    { id: 'tournament_02_2011_reputation_witcher_2', name: 'Свиток Фаворита', quality: 'green',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { vedmak: 15 } },
    { id: 'tournament_02_2011_reputation_witcher_3', name: 'Свиток Фаворита', quality: 'blue',   visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { vedmak: 20 } },
    { id: 'tournament_02_2011_reputation_witcher_4', name: 'Свиток Фаворита', quality: 'purple', visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { vedmak: 25 } },

    // Королевская Гвардия (guardsman): white=10%, green=15%, blue=20%, purple=25%
    { id: 'tournament_02_2011_reputation_guardsman_1', name: 'Свиток Фаворита', quality: 'white',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { guard: 10 } },
    { id: 'tournament_02_2011_reputation_guardsman_2', name: 'Свиток Фаворита', quality: 'green',  visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { guard: 15 } },
    { id: 'tournament_02_2011_reputation_guardsman_3', name: 'Свиток Фаворита', quality: 'blue',   visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { guard: 20 } },
    { id: 'tournament_02_2011_reputation_guardsman_4', name: 'Свиток Фаворита', quality: 'purple', visual: 'light_scroll', ext: 'jpg', type: 'percent', bonuses: { guard: 25 } },

  ],

};

// helper: получить все бафы применимые к данной репутации
function getRepBuffs(repId) {
  const result = { council: {}, seal: null, unique: [] };
  ['white','green','blue'].forEach(q => {
    const tier = REP_BUFFS.council[q];
    if (tier.bonuses[repId] !== undefined) result.council[q] = tier;
  });
  if (REP_BUFFS.seal.bonuses[repId] !== undefined) result.seal = REP_BUFFS.seal;
  REP_BUFFS.unique.forEach(u => {
    if (u.bonuses[repId] !== undefined && u.bonuses[repId] !== null) result.unique.push(u);
    if (u.multiplier && u.bonuses[repId] === null) result.unique.push(u); // multiplier items
  });
  return result;
}
