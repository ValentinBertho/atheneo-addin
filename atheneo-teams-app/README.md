# 🚀 ATHENEO Teams App

Application Microsoft Teams complète pour la gestion CRM intégrée avec ATHENEO. Gérez vos contacts, documents et conversations directement depuis Teams.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()
[![Teams](https://img.shields.io/badge/Microsoft-Teams-6264A7.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Utilisation](#-utilisation)
- [Architecture](#-architecture)
- [Développement](#-développement)

---

## 🎯 Aperçu

L'application ATHENEO Teams permet une intégration complète de votre ERP dans Microsoft Teams :

- 👥 **Gestion des contacts** : Créez, éditez et consultez vos interlocuteurs
- 📄 **Gestion documentaire** : Téléchargez, partagez et organisez vos documents
- 💬 **Historique des conversations** : Synchronisez vos échanges Teams avec ATHENEO
- 📊 **Tableau de bord** : Statistiques et activité récente en temps réel
- 🔍 **Recherche avancée** : Trouvez rapidement contacts et documents
- 🔔 **Notifications** : Restez informé des événements importants

**Gain de productivité estimé** : 60% de réduction du temps de saisie

---

## ✨ Fonctionnalités

### 🔥 Fonctionnalités principales

| Module | Fonctionnalités | Bénéfices |
|--------|----------------|-----------|
| **Contacts** | CRUD complet, recherche, filtres, import/export | Centralisation des données clients |
| **Documents** | Upload, téléchargement, catégorisation, partage | Gestion documentaire intégrée |
| **Conversations** | Synchronisation Teams, archivage, recherche | Traçabilité totale |
| **Tableau de bord** | Stats en temps réel, activité récente, KPIs | Vision globale instantanée |
| **Intégrations Teams** | Onglets personnels, recherche, notifications | Expérience utilisateur fluide |

### 🎨 Interface moderne

- ✅ Design Fluent compatible Teams
- ✅ Thème clair/sombre automatique
- ✅ Responsive (Desktop/Mobile/Web)
- ✅ Animations fluides
- ✅ Feedback visuel en temps réel
- ✅ Accessibilité WCAG 2.1

### 🔒 Sécurité

- 🔐 Authentification SSO via Teams
- 🔐 API sécurisée avec tokens Bearer
- 🔐 Chiffrement HTTPS
- 🔐 Validation des données côté client et serveur
- 🔐 Gestion des permissions utilisateur

---

## 📦 Installation

### Prérequis

- Microsoft Teams (Desktop, Web ou Mobile)
- Compte ATHENEO actif
- Droits d'installation d'applications Teams

### Installation via Teams Admin Center (Recommandé pour entreprises)

```bash
1. Connexion à https://admin.teams.microsoft.com
2. Aller dans "Applications Teams" > "Gérer les applications"
3. Cliquer sur "+ Télécharger"
4. Uploader le fichier manifest.json (ou le package .zip)
5. Configurer les permissions
6. Assigner aux utilisateurs/équipes
```

### Installation manuelle (Sideloading)

```bash
1. Ouvrir Teams
2. Aller dans "Applications"
3. Cliquer sur "Gérer vos applications" (icône ⚙️)
4. Cliquer sur "Télécharger une application personnalisée"
5. Choisir "Télécharger pour moi ou mes équipes"
6. Sélectionner le fichier manifest.json
7. Accepter les permissions
```

### Vérification

1. L'application "ATHENEO" apparaît dans votre liste d'applications
2. Cliquer dessus pour ouvrir les onglets
3. Le tableau de bord s'affiche avec vos statistiques

---

## ⚙️ Configuration

### Configuration de base

Éditer le fichier `config.js` :

```javascript
const ATHENEO_TEAMS_CONFIG = {
  api: {
    baseUrl: 'https://votre-instance.atheneo.com/api',
    apiKey: 'VOTRE_CLE_API_ICI'
  }
};
```

### Configuration avancée

Le fichier `config.js` permet de personnaliser :

- **API** : URL, timeout, retry, endpoints
- **UI** : Thème, pagination, notifications
- **Teams** : Synchronisation, notifications, auto-create
- **Contacts** : Champs requis, validation, types
- **Documents** : Taille max, extensions autorisées, catégories
- **Conversations** : Auto-sync, archivage, types
- **Logging** : Niveau, console, remote

---

## 📖 Utilisation

### 1. Tableau de bord

Le tableau de bord offre une vue d'ensemble :

- **Statistiques** : Contacts, documents, conversations, actions
- **Tendances** : Évolution mensuelle/hebdomadaire
- **Actions rapides** : Accès direct aux fonctions principales
- **Activité récente** : Dernières modifications

### 2. Gestion des contacts

**Créer un contact :**
```
1. Onglet "Contacts"
2. Bouton "+ Nouveau contact"
3. Remplir le formulaire (nom, prénom, email, ...)
4. Sauvegarder
```

**Rechercher un contact :**
```
1. Barre de recherche (nom, email, société)
2. Filtres : type, statut, date création
3. Résultats en temps réel
```

**Éditer un contact :**
```
1. Cliquer sur le contact dans la liste
2. Modifier les champs
3. Sauvegarder les modifications
```

**Actions sur un contact :**
- 📧 Envoyer un email (via Teams)
- 💬 Démarrer une conversation Teams
- 📞 Appeler (Teams Calling)
- 📄 Voir les documents associés
- 📊 Consulter l'historique d'interactions

### 3. Gestion des documents

**Télécharger un document :**
```
1. Onglet "Documents"
2. Bouton "📤 Télécharger"
3. Sélectionner le fichier (max 25 MB)
4. Catégoriser : type, catégorie, confidentialité
5. Associer à un contact (optionnel)
6. Upload
```

**Rechercher un document :**
```
1. Recherche par nom, type, catégorie
2. Filtres : date, taille, contact
3. Tri : date, nom, taille
```

**Actions sur un document :**
- 👁️ Prévisualiser (si supporté)
- ⬇️ Télécharger
- 🔗 Partager dans Teams (chat/canal)
- ✏️ Éditer les métadonnées
- 🗑️ Supprimer (avec confirmation)

### 4. Gestion des conversations

**Synchroniser une conversation Teams :**
```
1. La synchronisation est automatique si activée dans config.js
2. Onglet "Conversations"
3. Voir toutes les conversations synchronisées
4. Filtrer par type (chat, canal, réunion, appel)
```

**Archiver une conversation :**
```
1. Sélectionner la conversation
2. Cliquer sur "Archiver"
3. La conversation reste accessible mais marquée "Archivée"
```

**Actions sur une conversation :**
- 📖 Voir l'historique complet
- 🔗 Lien vers la conversation Teams
- 👥 Voir les participants
- 📎 Voir les fichiers partagés
- 📊 Statistiques (messages, durée, ...)

---

## 🏗️ Architecture

### Structure du projet

```
atheneo-teams-app/
├── manifest.json              # Manifeste Teams
├── config.js                  # Configuration centralisée
├── tabs/                      # Onglets de l'application
│   ├── index.html             # Tableau de bord
│   ├── contacts.html          # Gestion contacts
│   ├── documents.html         # Gestion documents
│   └── conversations.html     # Gestion conversations
├── assets/                    # Ressources
│   ├── icon-color.png         # Icône couleur (192x192)
│   └── icon-outline.png       # Icône outline (32x32)
└── docs/                      # Documentation
    ├── DOCUMENTATION_METIER.md
    └── BONNES_PRATIQUES.md
```

### Stack technique

- **Frontend** : HTML5, CSS3, Vanilla JavaScript
- **Framework** : Microsoft Teams SDK 2.19.0
- **API** : REST API (ATHENEO)
- **Authentification** : SSO Teams + Bearer Token
- **Hébergement** : Vercel / Azure Static Web Apps

### Flux de données

```
Teams Client → Teams SDK → ATHENEO Teams App → API ATHENEO → Database
     ↓                                                           ↓
Notifications ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
```

---

## 🛠️ Développement

### Installation pour développeurs

```bash
# Cloner le repository
git clone https://github.com/votre-org/atheneo-teams-app.git
cd atheneo-teams-app

# Pas de build nécessaire (vanilla JS)

# Tester localement avec ngrok ou serveur HTTPS
ngrok http 3000
# ou
npx http-server -p 3000 --ssl

# Mettre à jour manifest.json avec l'URL ngrok/localhost
# Sideload dans Teams pour tester
```

### Configuration du manifest pour dev

```json
{
  "staticTabs": [
    {
      "contentUrl": "https://your-ngrok-url.ngrok.io/tabs/index.html",
      "websiteUrl": "https://your-ngrok-url.ngrok.io/tabs/index.html"
    }
  ]
}
```

### Bonnes pratiques

- ✅ Toujours tester sur Desktop ET Web Teams
- ✅ Utiliser Teams SDK pour le contexte utilisateur
- ✅ Gérer les erreurs gracieusement
- ✅ Logger les événements importants
- ✅ Valider toutes les entrées utilisateur
- ✅ Implémenter le retry pour les appels API
- ✅ Respecter les guidelines Fluent UI

### Déploiement

```bash
# Déploiement sur Vercel
vercel --prod

# Ou via GitHub Actions (CI/CD automatique)
git push origin main

# Mettre à jour le manifest avec la nouvelle URL
# Republier l'application dans Teams Admin Center
```

---

## 🔍 Fonctionnalités Teams spécifiques

### 1. Recherche de contacts (Messaging Extension)

```
@ATHENEO rechercher Jean Dupont
```
Affiche une carte avec les résultats et permet de partager le contact dans le chat.

### 2. Recherche de documents (Messaging Extension)

```
@ATHENEO doc contrat
```
Trouve et partage des documents directement dans la conversation.

### 3. Notifications

L'application peut envoyer des notifications Teams pour :
- Nouveau contact créé
- Document partagé avec vous
- Action assignée
- Demande en attente

### 4. Onglets personnels

4 onglets disponibles dans la barre latérale :
- 🏠 Tableau de bord
- 👥 Contacts
- 📄 Documents
- 💬 Conversations

---

## 📊 Intégrations possibles

### Avec Teams

- ✅ Conversations (chat 1:1, groupes, canaux)
- ✅ Fichiers (OneDrive, SharePoint)
- ✅ Calendrier (créer événements depuis contacts)
- ✅ Appels (Teams Calling intégré)
- ✅ Présence (statut en ligne/hors ligne)

### Avec ATHENEO

- ✅ Contacts/Interlocuteurs
- ✅ Documents/Pièces jointes
- ✅ Demandes/Tickets
- ✅ Actions/Tâches
- ✅ Statistiques/Rapports

---

## 🐛 Dépannage

### L'application ne se charge pas

```
Vérifications :
1. URL du manifest accessible (HTTPS obligatoire)
2. Certificat SSL valide
3. Console Teams (Ctrl+Shift+I) pour voir les erreurs
4. Permissions accordées dans Teams Admin
```

### Erreur d'authentification API

```
Solutions :
1. Vérifier la clé API dans config.js
2. Tester l'endpoint API avec Postman
3. Vérifier que l'utilisateur Teams a un compte ATHENEO
4. Consulter les logs serveur
```

### Les données ne se synchronisent pas

```
Causes possibles :
1. Synchronisation désactivée dans config.js
2. Permissions insuffisantes
3. Erreur réseau
4. Format de données incompatible

Vérifier dans config.js :
teams.syncConversations = true
teams.syncSharedFiles = true
```

---

## 📄 Licence

Ce projet est sous licence MIT.

---

## 🙏 Remerciements

- Microsoft Teams Platform
- L'équipe ATHENEO
- Tous les contributeurs

---

## 🗺️ Roadmap

### Version 1.1 (Q2 2025)
- [ ] Bot conversationnel avec IA
- [ ] Commandes vocales
- [ ] Widgets de tableau de bord personnalisables
- [ ] Export Excel/PDF amélioré

### Version 1.2 (Q3 2025)
- [ ] Intégration Outlook (mail to contact)
- [ ] Workflows automatisés
- [ ] Templates de documents
- [ ] Signature électronique

### Version 2.0 (Q4 2025)
- [ ] IA pour suggestions de contacts
- [ ] Analyse de sentiment des conversations
- [ ] Prédictions de ventes
- [ ] Dashboard analytique avancé

---

**Développé avec ❤️ pour Microsoft Teams**

**Dernière mise à jour** : 28 janvier 2025
**Version** : 1.0.0
