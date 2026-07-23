# Instruccions per a la IA (Antigravity)

Aquest arxiu conté les preferències de personalització i context del projecte de planificació del viatge al Japó 2026. L'objectiu és que qualsevol instància de la IA (Antigravity/Gemini) pugui carregar aquest context immediatament en obrir el projecte en un altre ordinador.

## 📌 Context General
*   **Usuari principal (Tu)**: Es diu **Uri** (anteriorment s'utilitzava *Titon* a la base de dades).
*   **Assistent de codi (IA)**: S'anomena **IA** (anteriorment referenciat com a *Antigravity*).
*   **Company de viatge**: Es diu **Banana**.

## 🎨 Guia d'Estil i Disseny (UI/UX)
L'aplicació web utilitza una interfície fosca ultra-premium d'estil **glassmorphism**:
*   **Colors d'accent**:
    *   Kumano Kodo (Ruta pròpia d'en Uri): Verd neó (`--accent-green` o `#50fa7b`).
    *   Ruta sol d'en Banana: Blau neó (`--accent-blue` o `#06b6d4`).
    *   Trams compartits (Uri + Banana): Rosa sakura (`--accent-pink` o `#ff79c6`).
*   **Bacons de la Línia Temporal**:
    *   Utilitzar `.badge.badge-uri` per a les activitats d'en Uri.
    *   Utilitzar `.badge.badge-banana` per a les activitats d'en Banana.
    *   Utilitzar `.badge.badge-shared` per als trams compartits.

## 🗺️ Integració amb Google Maps
Sota el mapa interactiu de Leaflet a la secció de mapa, hi ha una targeta d'acció de Google Maps amb la classe `.map-actions-container`. Aquest botó enllaça amb:
`https://www.google.es/maps/@36.478049,137.100974,6.03z?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D`

## 💾 Gestió de LocalStorage i Seeding
A `app.js`, la funció `loadState()` controla la càrrega inicial. Si es fan canvis a la llista per defecte `DEFAULT_PLACES`, s'ha de garantir que la condició de forçat comproveixi si existeix el prefix `[Uri]` a la memòria cau per regenerar la llista al navegador de l'usuari amb el nom correcte:
```javascript
const hasOsakaOnsen = state.places.some(item => item.id === 'p-osaka');
const hasUriPrefix = state.places.some(item => item.text.includes('[Uri]'));
if (!hasOsakaOnsen || !hasUriPrefix) {
    state.places = DEFAULT_PLACES;
    saveState('places');
}
```
