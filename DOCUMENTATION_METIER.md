# Documentation Métier - Add-in ATHENEO pour Outlook

## 📋 Vue d'ensemble

L'add-in ATHENEO pour Outlook est une extension qui permet aux utilisateurs d'intégrer directement leurs emails Outlook avec le système ERP ATHENEO. Cette intégration facilite la gestion des communications clients, des demandes, et des actions de suivi sans quitter l'interface Outlook.

## 🎯 Objectifs métier

### Objectif principal
Simplifier et automatiser la capture des informations clients depuis Outlook vers ATHENEO, permettant ainsi :
- Une meilleure traçabilité des échanges clients
- Une réduction du temps de saisie manuelle
- Une centralisation des données dans l'ERP
- Une amélioration de la réactivité du service client

### Bénéfices attendus
- **Gain de temps** : Réduction de 70% du temps de saisie manuelle
- **Fiabilité** : Élimination des erreurs de transcription
- **Traçabilité** : Conservation automatique de tous les échanges
- **Efficacité** : Accès immédiat aux données clients depuis Outlook

## 👥 Utilisateurs cibles

### Profils utilisateurs
1. **Service Commercial**
   - Enregistrement des demandes clients
   - Suivi des opportunités
   - Gestion des contacts

2. **Service Support Client**
   - Création de tickets depuis les emails
   - Gestion des réclamations
   - Archivage des échanges

3. **Direction**
   - Consultation des historiques clients
   - Suivi des actions en cours

## 🔧 Fonctionnalités métier

### 1. Enregistrement de mail 💾

**Cas d'usage :**
Un commercial reçoit un email important d'un client et souhaite l'archiver dans ATHENEO.

**Processus :**
1. Ouverture de l'email dans Outlook
2. Clic sur le bouton ATHENEO dans le ruban
3. Sélection de "Enregistrer le mail"
4. Le mail est automatiquement archivé avec :
   - Expéditeur (nom et email)
   - Sujet
   - Corps du message
   - Date de réception
   - ID unique du message

**Données capturées :**
- `from` : Adresse email de l'expéditeur
- `fromName` : Nom de l'expéditeur
- `subject` : Sujet du mail
- `body` : Contenu complet (HTML)
- `date` : Date et heure de réception
- `messageId` : Identifiant unique Outlook

**Résultat :**
Le mail est stocké dans ATHENEO avec un ID de référence unique, permettant une recherche et une consultation ultérieures.

---

### 2. Création de demande 📋

**Cas d'usage :**
Un client envoie une demande de devis ou une question technique par email. L'utilisateur doit créer une demande formelle dans ATHENEO.

**Processus :**
1. Lecture de l'email client
2. Clic sur "Créer une demande"
3. Le système génère automatiquement :
   - Une demande avec numéro de référence unique
   - Association avec le contact client (si existant)
   - Statut initial "En attente"
   - Priorité par défaut "Normale"

**Données de la demande :**
- `email` : Email du demandeur
- `contactName` : Nom du contact
- `subject` : Sujet de la demande (repris du mail)
- `description` : Description complète (corps du mail)
- `source` : "outlook_addin" (pour traçabilité)
- `priority` : Normale (modifiable ensuite dans ATHENEO)
- `type` : "email"

**Résultat :**
Une demande est créée dans ATHENEO avec une référence unique (ex: DEM-2025-001234), permettant son suivi dans le système.

---

### 3. Consultation de contact 👤

**Cas d'usage :**
Avant de répondre à un client, l'utilisateur souhaite consulter sa fiche complète dans ATHENEO (historique, contrats, demandes précédentes).

**Processus :**
1. Lecture d'un email
2. Clic sur "Consulter le contact"
3. Le système recherche le contact par email
4. Si trouvé : ouverture de la fiche dans un nouvel onglet
5. Si non trouvé : message d'avertissement

**Informations consultables :**
- Coordonnées complètes
- Société rattachée
- Historique des échanges
- Demandes en cours
- Contrats actifs
- Actions planifiées

**Résultat :**
L'utilisateur dispose de toutes les informations contextuelles nécessaires pour une réponse pertinente.

---

### 4. Sauvegarde des pièces jointes 📎

**Cas d'usage :**
Un client envoie des documents importants (devis signés, plans, factures) en pièces jointes. Ces documents doivent être archivés dans ATHENEO.

**Processus :**
1. Réception d'un email avec pièces jointes
2. Le badge indique le nombre de pièces jointes (ex: 📎 3)
3. Clic sur "Sauvegarder les pièces jointes"
4. Toutes les pièces sont transférées vers ATHENEO

**Données enregistrées :**
- Nom du fichier
- Taille
- Type MIME
- Contexte : email d'origine, expéditeur, sujet
- Métadonnées de classification

**Résultat :**
Les documents sont centralisés dans ATHENEO, associés au contact et au mail source, avec possibilité de recherche et de consultation.

**Cas particulier :**
Si aucune pièce jointe n'est présente, le bouton est automatiquement désactivé.

---

### 5. Création d'action de suivi ✓

**Cas d'usage :**
Suite à la lecture d'un email client, l'utilisateur souhaite programmer une action de suivi (rappel, relance, vérification).

**Processus :**
1. Lecture de l'email nécessitant un suivi
2. Clic sur "Créer une action de suivi"
3. Génération automatique d'une action dans ATHENEO

**Structure de l'action :**
- `title` : "Suivi: [Sujet du mail]"
- `description` : Contenu du mail pour contexte
- `type` : "email_follow_up"
- `priority` : "normale"
- `status` : "a_faire"
- `email` : Email du contact concerné
- `contactName` : Nom du contact
- `source` : "outlook_addin"
- `dueDate` : null (à définir manuellement dans ATHENEO)

**Résultat :**
Une tâche est créée dans le système de gestion des actions ATHENEO avec une référence unique (ex: ACT-2025-005678).

**Workflow typique :**
1. Création de l'action depuis Outlook
2. Affectation à un utilisateur dans ATHENEO
3. Définition d'une échéance
4. Suivi de réalisation
5. Clôture avec compte-rendu

## 📊 Contexte du mail

### Informations affichées
L'interface affiche systématiquement les informations contextuelles du mail en cours :

**Section "Contexte du mail" (collapsible) :**
- **De** : Nom et adresse email de l'expéditeur
- **Sujet** : Sujet complet du mail
- **Pièces jointes** : Liste des fichiers avec leurs tailles respectives
- **Badge** : Nombre de pièces jointes (📎 X)

Cette section est pliable/dépliable pour optimiser l'espace d'écran.

## 🔐 Sécurité et authentification

### Authentification API
Toutes les communications avec l'API ATHENEO sont sécurisées via :
- **Token Bearer** : Clé API intégrée dans les en-têtes HTTP
- **HTTPS** : Chiffrement de toutes les communications
- **Validation** : Vérification systématique des données avant envoi

### Données sensibles
- Les mots de passe ne sont jamais transmis
- Les données personnelles sont traitées selon RGPD
- Les emails sont stockés côté serveur de manière sécurisée

## 📈 Indicateurs de performance

### KPIs à suivre
1. **Taux d'utilisation**
   - Nombre de mails enregistrés par jour/utilisateur
   - Nombre de demandes créées par semaine

2. **Gain de temps**
   - Temps moyen de traitement avant/après add-in
   - Nombre d'actions de suivi créées

3. **Qualité des données**
   - Taux de complétude des informations
   - Nombre d'erreurs corrigées

## 🔄 Workflows métier

### Workflow 1 : Traitement d'une demande client
```
Email reçu → Consultation contact → Création demande → Sauvegarde mail → Création action suivi
```

### Workflow 2 : Archivage simple
```
Email reçu → Vérification pièces jointes → Sauvegarde PJ → Enregistrement mail
```

### Workflow 3 : Suivi commercial
```
Email prospect → Création demande → Consultation fiche → Création action → Planification dans ATHENEO
```

## ❓ Questions fréquentes (FAQ)

### Q1 : Que se passe-t-il si le contact n'existe pas dans ATHENEO ?
**R :** Le système affiche un message d'avertissement. Vous pouvez créer la demande ou l'action, et le contact sera créé automatiquement ou manuellement dans ATHENEO.

### Q2 : Peut-on modifier une demande après création ?
**R :** Oui, toutes les modifications se font dans l'interface ATHENEO. L'add-in sert uniquement à la création initiale.

### Q3 : Les emails sont-ils dupliqués si on clique plusieurs fois ?
**R :** Le système utilise le `messageId` unique d'Outlook pour détecter les doublons côté serveur.

### Q4 : Quelle est la taille maximale des pièces jointes ?
**R :** La limite dépend de la configuration serveur ATHENEO (généralement 25 Mo par fichier).

### Q5 : L'add-in fonctionne-t-il hors ligne ?
**R :** Non, une connexion Internet est nécessaire pour communiquer avec l'API ATHENEO.

## 🚀 Évolutions futures

### Fonctionnalités en développement
- [ ] Recherche inversée : depuis ATHENEO, ouvrir l'email dans Outlook
- [ ] Catégorisation automatique des emails
- [ ] Suggestions de réponses basées sur l'historique
- [ ] Intégration avec le calendrier pour les actions à échéance
- [ ] Statistiques d'utilisation intégrées
- [ ] Mode hors ligne avec synchronisation différée

### Améliorations UX prévues
- [ ] Raccourcis clavier
- [ ] Glisser-déposer de pièces jointes
- [ ] Prévisualisation des fiches contacts
- [ ] Templates de demandes prédéfinies

## 📞 Support et assistance

### En cas de problème
1. Vérifier la connexion API (indicateur en bas de l'interface)
2. Consulter les logs dans la console développeur (F12)
3. Contacter le support ATHENEO avec :
   - Capture d'écran de l'erreur
   - Message d'erreur complet
   - Email concerné (si possible)

### Contacts
- **Support technique** : support@atheneo.fr
- **Documentation en ligne** : https://docs.atheneo.fr
- **Formation** : formation@atheneo.fr

---

**Version du document** : 1.0
**Date de création** : 2025-01-28
**Dernière mise à jour** : 2025-01-28
**Auteur** : Équipe ATHENEO
