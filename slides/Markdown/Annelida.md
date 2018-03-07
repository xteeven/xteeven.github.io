# Notes About Annelida Control Design 
- # Explosive Atmospheres 
    - Equipment gorup II (Gases)  IEC / EN 60079-10-1. 
    - Class I, Division 1 
    - Zone 0 or 1?
    - Category 1: (Used in zone 0, 1, 2)

    - Feasible Options:

| Ex code | Description          | Standar                 | Zone                  | Use         |
| ------- | -------------------- | ----------------------- | --------------------- | ----------- |
| m       | Encapsulated (resin) | IEC/EN 60079-18         | 1 \| 0                | electronics |
| p       | Pressurised          | IEC/EN 60079-2          | 1 (px \| py) \| 2 pz  | Computers   |
| i       | Intrinsically safe   | IEC/EN 60079-25 -11 -27 | 'ai': 0 'ib': 1 ic: 2 | Control     |
| o       | Oil Filled           | IEC/EN 60079-6          | 2 \| 1                | switchgear  |

- The types of protection are subdivided into several sub classes, linked to EPL (EQUIPMENT PROTECTION LEVEL): ma and mb, px, py and pz, ia, ib and ic. The a subdivisions have the most stringent safety requirements, taking into account more the one independent component faults simultaneously.

| Zone | Level     | ATEX | EPL |
| ---- | --------- | ---- | --- |
| 0    | Very High | 1G   | Ga  |
| 1    | High      | 2G   | Gb  |
| 2    | Normal    | 3G   | Gc  |
| 20   | Very High | 1D   | Da  |
| 21   | High      | 2D   | Db  |
| 22   | Normal    | 3D   | Dc  |

- EPL Ga: Equipment for explosive atmospheres due to the presence of gas, with a level of
protection 'very high', which is not a source of ignition in normal operation, or in case of expected
failure or when subjected to a rare failure.

- EPL Gb: Equipment for use in explosive atmospheres due to the presence of gas, with a 'high'
level of protection that is not the source of ignition in normal operation or when subject to expected
malfunctions, although not on a regular basis.

- EPL Gb: Equipment for use in explosive atmospheres due to the presence of gas, with a 'high'
level of protection that is not the source of ignition in normal operation or when subject to expected
malfunctions, although not on a regular basis.

- EN 60079-14 standard of March 2010 introduced a method for risk assessment that considers the
equipment levels of protection (EPL).



## Standars for explosive atmospheres


* EUROPEAN COMMISSION **2014/34/EU** ATEX CE + Ex [From 20 April 2016]
    * Directive 2014/34/EU of the European Parliament and of the Council of 26 February 2014 on the harmonisation of the laws of the Member States relating to equipment and protective systems intended for use in potentially explosive atmospheres (recast)
    * For further information on the ATEX Directive 2014/34/EU on Equipment and protective systems please visit the Directorate-General (DG) for Internal Market, Industry, Entrepreneurship and SMEs website dedicated to this sector by following this link: http://ec.europa.eu/growth/sectors/mechanical-engineering/atex_en
    * For a further look at the harmonised standards for ATEX, please visit: http://ec.europa.eu/growth/single-market/european-standards/harmonised-standards/equipment-explosive-atmosphere_en
    * Reference: https://ec.europa.eu/growth/single-market/ce-marking/manufacturers_en
![](2018-03-07-12-42-33.png)

## How the control could be implemented under that requirements

- Oil Immersion
- Intrinsecally safe
- Pressure 




- # Prototype Design

## Components

All components were listed in google sheets to be purchased.
But yet I have to define the material to enclose all the control.

- [PT] Dependendo das dimenções dos componentes é necessario fazer um corte laser

