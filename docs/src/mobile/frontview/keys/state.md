# FrontViewStateKey

Данный тип ключа подразумевает, что он несёт в себе состояние.

## Пример JSON`a
```json
{
    "water_leak": {
        "index": 0, // Индекс положения
        "label": "Состояние", // Отображаемое название ключа
        "mqttKey": "water_leak", // Ключ, по которому нам приходят данные в MQTT
        "metaByValue": { // Описание на каждое значение
            "true": {
                "label": "Протечка", // Отображаемый текст на это значение
                "status": "warning" // Статус на это значение для цветовой индикации
            },
            "false": {
                "label": "Протечки нет", // Отображаемый текст на это значение
                "status": "normal" // Статус на это значение для цветовой индикации
            }
        },
        "conversionMap": { // Карта конвертации значений
            "true": "true",
            "false": "false"
        },
        "usedInCharts": false // Означает, что данный ключ может быть использован в графиках
    }
}
```

## Опциональность ключей

### JSON ключа
| Ключ        |      Опционален      |      Варианты значений      |Стандартное значения|
| ----------- |      :--------:      |      :----------:      | ----------:|
| index      | Нет | > 0 | - |
| label      |   Нет    | строка | - |
| mqttKey |   Нет    | строка | - |
| metaByValue |   Нет    | json | - |
| conversionMap |   Нет    |  json | - |
| suffix |   Да    | строка | '' |
| usedInCharts |   Да    |  `true` / `false`| `true` |

### JSON metaByValue
| Ключ        |      Опционален      |      Варианты значений      |
| ----------- |      :--------:     |      ----------------:      |
| label       |   Нет    | строка |
| status      |   Нет    | normal / warning / error |
