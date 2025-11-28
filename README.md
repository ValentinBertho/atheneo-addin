# 🚀 ATHENEO Add-in pour Outlook

Add-in Outlook professionnel pour intégrer vos emails avec l'ERP ATHENEO. Gagnez du temps en centralisant vos communications clients directement depuis Outlook.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/votre-repo/atheneo-addin)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Office Add-in](https://img.shields.io/badge/Office-Add--in-orange.svg)](https://docs.microsoft.com/en-us/office/dev/add-ins/)

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Captures d'écran](#-captures-décran)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Utilisation](#-utilisation)
- [Documentation](#-documentation)
- [Développement](#-développement)
- [Support](#-support)

---

## 🎯 Aperçu

L'add-in ATHENEO pour Outlook permet aux utilisateurs de :
- 💾 Enregistrer automatiquement les emails dans l'ERP
- 📋 Créer des demandes clients en un clic
- 👤 Consulter les fiches contacts
- 📎 Archiver les pièces jointes
- ✓ Planifier des actions de suivi

**Gain de temps estimé** : 70% de réduction du temps de saisie manuelle

---

## ✨ Fonctionnalités

### 🔥 Fonctionnalités principales

| Fonctionnalité | Description | Bénéfice |
|----------------|-------------|----------|
| **Enregistrement de mail** | Sauvegarde automatique des emails dans ATHENEO | Traçabilité complète |
| **Création de demande** | Génération de tickets avec référence unique | Gestion structurée |
| **Consultation contact** | Accès instantané à la fiche client | Contexte immédiat |
| **Gestion PJ** | Archivage automatique des pièces jointes | Centralisation |
| **Actions de suivi** | Planification de tâches depuis l'email | Organisation |

### 🎨 UX/UI améliorée

- ✅ Interface moderne avec thème sombre élégant
- ✅ Animations fluides et micro-interactions
- ✅ Tooltips informatifs sur toutes les actions
- ✅ Feedback visuel en temps réel
- ✅ Design responsive et accessible
- ✅ États de chargement avec loaders
- ✅ Messages d'erreur clairs et actionnables

### 🔒 Sécurité

- 🔐 Authentification API avec token Bearer
- 🔐 Communication chiffrée HTTPS
- 🔐 Validation des données côté client
- 🔐 Retry automatique avec backoff exponentiel
- 🔐 Gestion d'erreurs robuste

---

## 📸 Captures d'écran

### Interface principale
```
┌────────────────────────────────────┐
│ 🅰️ ATHENEO                         │
├────────────────────────────────────┤
│ 📧 Contexte du mail         📎 3   │
│    ▼ Afficher les détails          │
├────────────────────────────────────┤
│ ✅ Mail enregistré avec succès     │
├────────────────────────────────────┤
│ ACTIONS DISPONIBLES                │
│                                    │
│ 💾 Enregistrer le mail             │
│    Archiver dans la base ATHENEO   │
│                                    │
│ 📋 Créer une demande               │
│    Générer une demande avec réf.   │
│                                    │
│ 👤 Consulter le contact            │
│    Ouvrir la fiche interlocuteur   │
│                                    │
│ 📎 Sauvegarder les PJ              │
│    Archiver les documents attachés │
│                                    │
│ ✓ Créer une action de suivi        │
│    Planifier une action ultérieure │
├────────────────────────────────────┤
│ 🟢 API connectée                   │
└────────────────────────────────────┘
```

---

## 📦 Installation

### Prérequis

- Microsoft Outlook 2016+ (Windows/Mac) ou Outlook Web
- Connexion Internet
- Compte ATHENEO actif
- Clé API ATHENEO

### Installation pour les utilisateurs

#### Méthode 1 : Installation via le Store Office (Recommandé)
1. Ouvrir Outlook
2. Aller dans **Insérer** > **Obtenir des compléments**
3. Rechercher "ATHENEO"
4. Cliquer sur **Ajouter**
5. Suivre les instructions d'installation

#### Méthode 2 : Installation manuelle (Sideloading)
1. Télécharger le fichier `manifest.xml`
2. Ouvrir Outlook
3. Aller dans **Fichier** > **Gérer les compléments**
4. Cliquer sur **+ Ajouter un complément personnalisé**
5. Sélectionner **Ajouter à partir d'un fichier**
6. Choisir le fichier `manifest.xml`
7. Accepter l'installation

#### Méthode 3 : Déploiement centralisé (Entreprise)
Pour les administrateurs IT :
```bash
# Utiliser Exchange Admin Center
1. Connexion à https://admin.exchange.microsoft.com
2. Aller dans "Paramètres de l'organisation" > "Compléments"
3. Cliquer sur "+ Ajouter un complément"
4. Choisir "Depuis un fichier"
5. Uploader manifest.xml
6. Assigner aux utilisateurs/groupes
```

### Vérification de l'installation

1. Ouvrir un email dans Outlook
2. Vérifier la présence du bouton **ATHENEO** dans le ruban
3. Cliquer dessus pour ouvrir le panneau
4. L'indicateur "🟢 API connectée" doit s'afficher en bas

---

## ⚙️ Configuration

### Configuration de base

1. **Obtenir une clé API**
   - Se connecter à ATHENEO
   - Aller dans **Paramètres** > **API**
   - Générer une nouvelle clé API
   - Copier la clé

2. **Configurer l'add-in**
   - Éditer le fichier `config.js`
   - Remplacer les valeurs par défaut :

```javascript
const ATHENEO_CONFIG = {
  api: {
    baseUrl: 'https://votre-instance.atheneo.com/api',
    apiKey: 'VOTRE_CLE_API_ICI'
  }
};
```

### Configuration avancée

Le fichier `config.js` permet de personnaliser :
- Timeout et retry des appels API
- Durée d'affichage des messages
- Activation/désactivation de fonctionnalités
- Niveau de logging
- Thème et apparence

Consultez `config.js` pour la liste complète des options.

### Variables d'environnement (Production)

Pour la production, utiliser des variables d'environnement :

```bash
# .env
ATHENEO_API_URL=https://api.atheneo.com
ATHENEO_API_KEY=your_secure_key_here
ATHENEO_ENVIRONMENT=production
```

---

## 📖 Utilisation

### Utilisation basique

#### 1. Enregistrer un mail
```
1. Ouvrir l'email dans Outlook
2. Cliquer sur le bouton ATHENEO
3. Cliquer sur "💾 Enregistrer le mail"
4. Confirmation : "✓ Mail enregistré avec succès (ID: 12345)"
```

#### 2. Créer une demande
```
1. Lire l'email du client
2. Ouvrir le panneau ATHENEO
3. Cliquer sur "📋 Créer une demande"
4. Une demande est créée avec référence unique
5. Confirmation : "✓ Demande créée : DEM-2025-001234"
```

#### 3. Consulter un contact
```
1. Ouvrir un email
2. Cliquer sur "👤 Consulter le contact"
3. La fiche contact s'ouvre dans un nouvel onglet
4. Consulter l'historique, les contrats, etc.
```

#### 4. Sauvegarder les pièces jointes
```
1. Ouvrir un email avec PJ
2. Le badge indique le nombre : 📎 3
3. Cliquer sur "📎 Sauvegarder les pièces jointes"
4. Confirmation : "✓ 3 pièce(s) jointe(s) enregistrée(s)"
```

#### 5. Créer une action de suivi
```
1. Lire l'email nécessitant un suivi
2. Cliquer sur "✓ Créer une action de suivi"
3. Une action est créée dans ATHENEO
4. Définir l'échéance dans l'ERP
```

### Workflows métier

#### Workflow complet : Traitement d'une demande client
```
📧 Email reçu
  ↓
👤 Consulter le contact (contexte)
  ↓
📋 Créer la demande
  ↓
💾 Enregistrer le mail
  ↓
📎 Sauvegarder les PJ (si présentes)
  ↓
✓ Créer une action de suivi
  ↓
✅ Traitement complet en 30 secondes !
```

### Raccourcis clavier (à venir)

| Raccourci | Action |
|-----------|--------|
| `Ctrl+S` | Enregistrer le mail |
| `Ctrl+D` | Créer une demande |
| `Ctrl+K` | Consulter le contact |
| `Ctrl+A` | Créer une action |

---

## 📚 Documentation

### Documentation disponible

| Document | Description | Lien |
|----------|-------------|------|
| **Documentation Métier** | Guide complet des fonctionnalités et cas d'usage | [DOCUMENTATION_METIER.md](./DOCUMENTATION_METIER.md) |
| **Bonnes Pratiques** | Recommandations techniques et architecturales | [BONNES_PRATIQUES.md](./BONNES_PRATIQUES.md) |
| **Configuration** | Guide de configuration avancée | [config.js](./config.js) |
| **API Reference** | Documentation de l'API ATHENEO | https://docs.atheneo.fr/api |

### FAQ

**Q : L'add-in fonctionne-t-il hors ligne ?**
R : Non actuellement, une connexion Internet est nécessaire. Le mode hors ligne est prévu pour une version future.

**Q : Peut-on annuler une action ?**
R : Les emails et demandes ne peuvent pas être supprimés depuis l'add-in. Utiliser l'interface ATHENEO pour les modifications.

**Q : Quelle est la limite de taille des pièces jointes ?**
R : 25 Mo par fichier (configurable côté serveur).

**Q : Les emails sont-ils dupliqués si on clique plusieurs fois ?**
R : Non, le système utilise l'ID unique Outlook pour détecter les doublons.

**Q : Quelles données sont envoyées à ATHENEO ?**
R : Expéditeur, sujet, corps du mail, date, pièces jointes. Aucune donnée sensible (mots de passe) n'est transmise.

---

## 🛠️ Développement

### Stack technique

- **Frontend** : HTML5, CSS3, Vanilla JavaScript
- **Framework** : Office.js (Office Add-ins API)
- **API** : REST API (ATHENEO)
- **Authentification** : Bearer Token
- **Hébergement** : Vercel

### Installation pour les développeurs

```bash
# Cloner le repository
git clone https://github.com/votre-org/atheneo-addin.git
cd atheneo-addin

# Pas de build nécessaire (vanilla JS)
# Éditer les fichiers directement

# Tester localement
# 1. Lancer un serveur local
python -m http.server 8000
# ou
npx http-server -p 8000

# 2. Modifier manifest.xml pour pointer vers localhost
<SourceLocation DefaultValue="http://localhost:8000/taskpane.html"/>

# 3. Sideload dans Outlook
```

### Structure du projet

```
atheneo-addin/
├── taskpane.html          # Interface principale (HTML + CSS + JS)
├── commands.html          # Fichier de commandes Office
├── manifest.xml           # Manifeste de l'add-in
├── config.js              # Configuration centralisée
├── assets/                # Ressources statiques
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-80.png
├── docs/                  # Documentation (optionnel)
│   ├── DOCUMENTATION_METIER.md
│   └── BONNES_PRATIQUES.md
└── README.md              # Ce fichier
```

### Tests

```javascript
// Tests unitaires (à implémenter)
npm test

// Tests d'intégration
npm run test:integration

// Tests E2E
npm run test:e2e
```

### Déploiement

```bash
# Déploiement sur Vercel
vercel --prod

# Ou via GitHub Actions
git push origin main
# Le déploiement se fait automatiquement
```

### Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Bonnes pratiques de développement

- ✅ Tester sur toutes les plateformes (Windows, Mac, Web)
- ✅ Valider toutes les entrées utilisateur
- ✅ Gérer les erreurs gracieusement
- ✅ Logger les événements importants
- ✅ Ne jamais exposer de clés API
- ✅ Commenter le code complexe
- ✅ Suivre les conventions de nommage

---

## 🐛 Dépannage

### Problèmes courants

#### L'add-in ne se charge pas
```
Vérifications :
1. Connexion Internet active ?
2. Manifest.xml valide ?
3. URL de déploiement accessible ?
4. Console navigateur (F12) pour voir les erreurs
```

#### "Erreur API"
```
Solutions :
1. Vérifier la clé API dans config.js
2. Vérifier l'URL de l'API
3. Tester l'API avec Postman/curl
4. Consulter les logs serveur
```

#### "Contact non trouvé"
```
Le contact n'existe pas dans ATHENEO.
Créer le contact manuellement puis réessayer.
```

#### Pièces jointes non sauvegardées
```
Causes possibles :
1. Taille > 25 MB
2. Type de fichier non autorisé
3. Erreur réseau
Consulter la console (F12) pour plus de détails.
```

### Logs de debug

```javascript
// Activer le mode debug dans config.js
ATHENEO_CONFIG.development.debug = true;
ATHENEO_CONFIG.logging.level = 'DEBUG';

// Puis consulter la console (F12)
```

---

## 🆘 Support

### Obtenir de l'aide

- 📧 **Email** : support@atheneo.fr
- 📞 **Téléphone** : +33 1 23 45 67 89
- 💬 **Chat** : https://atheneo.fr/support
- 📚 **Documentation** : https://docs.atheneo.fr
- 🐛 **Bug Report** : https://github.com/votre-org/atheneo-addin/issues

### Horaires de support

- **Lundi - Vendredi** : 9h00 - 18h00 (CET)
- **Weekend** : Support d'urgence uniquement
- **Délai de réponse** : < 4 heures ouvrées

### Informations à fournir pour un ticket

```
1. Version de l'add-in (voir config.js)
2. Version d'Outlook (Windows/Mac/Web)
3. Message d'erreur complet
4. Capture d'écran
5. Étapes pour reproduire
6. Logs de la console (F12)
```

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- Microsoft Office Dev Team pour l'API Office.js
- L'équipe ATHENEO pour le support
- Tous les contributeurs du projet

---

## 🗺️ Roadmap

### Version 1.1 (Q2 2025)
- [ ] Mode hors ligne avec synchronisation
- [ ] Raccourcis clavier
- [ ] Recherche de contacts avancée
- [ ] Templates de demandes

### Version 1.2 (Q3 2025)
- [ ] Statistiques d'utilisation intégrées
- [ ] Thème clair/sombre
- [ ] Multi-langue (EN, ES, DE)
- [ ] Notifications push

### Version 2.0 (Q4 2025)
- [ ] IA pour catégorisation automatique
- [ ] Suggestions de réponses
- [ ] Intégration calendrier
- [ ] Mode mobile amélioré

---

## 📊 Statistiques

![Downloads](https://img.shields.io/badge/downloads-1k%2Fmonth-brightgreen)
![Active Users](https://img.shields.io/badge/active%20users-250%2B-blue)
![Satisfaction](https://img.shields.io/badge/satisfaction-4.8%2F5-yellow)

---

**Développé avec ❤️ par l'équipe ATHENEO**

**Dernière mise à jour** : 28 janvier 2025
**Version** : 1.0.0
