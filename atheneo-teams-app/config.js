/**
 * Configuration centralisée pour l'application ATHENEO Teams
 *
 * @version 1.0.0
 * @date 2025-01-28
 */

const ATHENEO_TEAMS_CONFIG = {
  /**
   * Configuration API ATHENEO
   */
  api: {
    baseUrl: 'https://api-demo-production-8637.up.railway.app/atheneo/api',
    apiKey: 'VotreCleAPISecrete123',
    timeout: 15000,
    retryAttempts: 3,
    retryDelay: 1000,

    endpoints: {
      // Contacts
      contacts: '/interlocuteurs',
      contactById: '/interlocuteurs/:id',
      contactSearch: '/interlocuteurs/search',

      // Documents
      documents: '/documents',
      documentById: '/documents/:id',
      documentUpload: '/documents/upload',
      documentDownload: '/documents/:id/download',

      // Conversations
      conversations: '/conversations',
      conversationById: '/conversations/:id',
      conversationMessages: '/conversations/:id/messages',

      // Demandes
      requests: '/demandes',
      requestById: '/demandes/:id',

      // Actions
      actions: '/actions',
      actionById: '/actions/:id',

      // Statistiques
      stats: '/stats',
      dashboard: '/dashboard'
    }
  },

  /**
   * Configuration UI
   */
  ui: {
    theme: {
      primary: '#8b5cf6',
      primaryHover: '#7c3aed',
      accent: '#ec4899',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    },

    pagination: {
      itemsPerPage: 20,
      maxPages: 10
    },

    notifications: {
      duration: 5000,
      position: 'top-right'
    },

    animations: {
      enabled: true,
      duration: 300
    }
  },

  /**
   * Configuration Teams
   */
  teams: {
    // Activer l'intégration avec les conversations Teams
    syncConversations: true,

    // Créer automatiquement un contact pour les membres Teams
    autoCreateContacts: true,

    // Synchroniser les fichiers partagés dans Teams
    syncSharedFiles: true,

    // Envoyer des notifications Teams
    enableNotifications: true
  },

  /**
   * Configuration des contacts
   */
  contacts: {
    // Champs obligatoires pour créer un contact
    requiredFields: ['nom', 'prenom', 'email'],

    // Champs optionnels
    optionalFields: ['telephone', 'fonction', 'societe', 'adresse'],

    // Types de contacts
    types: ['client', 'prospect', 'partenaire', 'fournisseur', 'interne'],

    // Statuts
    statuses: ['actif', 'inactif', 'archive'],

    // Validation email
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    // Validation téléphone (format international)
    phoneRegex: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
  },

  /**
   * Configuration des documents
   */
  documents: {
    // Taille maximale (25 MB)
    maxFileSize: 26214400,

    // Extensions autorisées
    allowedExtensions: [
      '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
      '.txt', '.csv', '.rtf', '.odt', '.ods', '.odp',
      '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg',
      '.zip', '.rar', '.7z', '.tar', '.gz'
    ],

    // Types de documents
    types: ['contrat', 'facture', 'devis', 'presentation', 'rapport', 'autre'],

    // Catégories
    categories: ['commercial', 'technique', 'juridique', 'financier', 'rh'],

    // Niveaux de confidentialité
    confidentiality: ['public', 'interne', 'confidentiel', 'secret']
  },

  /**
   * Configuration des conversations
   */
  conversations: {
    // Synchroniser automatiquement les conversations Teams
    autoSync: true,

    // Archiver les conversations anciennes (jours)
    archiveAfterDays: 90,

    // Nombre maximum de messages par conversation à afficher
    maxMessages: 100,

    // Types de conversations
    types: ['chat', 'channel', 'meeting', 'call'],

    // Statuts
    statuses: ['active', 'archived', 'deleted']
  },

  /**
   * Configuration des fonctionnalités
   */
  features: {
    // Activer la recherche avancée
    enableAdvancedSearch: true,

    // Activer les filtres
    enableFilters: true,

    // Activer l'export de données
    enableExport: true,

    // Activer l'import de données
    enableImport: true,

    // Activer les statistiques
    enableStats: true,

    // Activer les notifications
    enableNotifications: true,

    // Activer le mode hors ligne
    enableOfflineMode: false,

    // Activer le cache
    enableCache: true,
    cacheDuration: 300000 // 5 minutes
  },

  /**
   * Configuration du logging
   */
  logging: {
    level: 'INFO', // DEBUG, INFO, WARN, ERROR, NONE
    console: true,
    remote: false,
    includeTimestamp: true,
    includeUserInfo: true
  },

  /**
   * Messages personnalisables
   */
  messages: {
    contacts: {
      created: 'Contact créé avec succès',
      updated: 'Contact mis à jour',
      deleted: 'Contact supprimé',
      notFound: 'Contact non trouvé',
      error: 'Erreur lors de l\'opération sur le contact'
    },
    documents: {
      uploaded: 'Document téléchargé avec succès',
      downloaded: 'Document téléchargé',
      deleted: 'Document supprimé',
      notFound: 'Document non trouvé',
      tooLarge: 'Fichier trop volumineux (max 25 MB)',
      invalidType: 'Type de fichier non autorisé',
      error: 'Erreur lors de l\'opération sur le document'
    },
    conversations: {
      created: 'Conversation créée',
      archived: 'Conversation archivée',
      notFound: 'Conversation non trouvée',
      error: 'Erreur lors de l\'opération sur la conversation'
    },
    general: {
      success: 'Opération réussie',
      error: 'Une erreur est survenue',
      loading: 'Chargement en cours...',
      noData: 'Aucune donnée disponible',
      networkError: 'Erreur réseau. Vérifiez votre connexion.',
      unauthorized: 'Non autorisé. Veuillez vous reconnecter.',
      forbidden: 'Accès refusé',
      serverError: 'Erreur serveur. Veuillez réessayer.'
    }
  },

  /**
   * Métadonnées de l'application
   */
  app: {
    name: 'ATHENEO Teams',
    version: '1.0.0',
    environment: 'production',
    supportUrl: 'https://support.atheneo.fr',
    docsUrl: 'https://docs.atheneo.fr/teams-app',
    feedbackUrl: 'https://feedback.atheneo.fr'
  }
};

/**
 * Fonction helper pour récupérer une config
 */
function getTeamsConfig(path, defaultValue = null) {
  const keys = path.split('.');
  let value = ATHENEO_TEAMS_CONFIG;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return value;
}

/**
 * Fonction helper pour construire une URL d'endpoint
 */
function buildEndpoint(endpointKey, params = {}) {
  const baseUrl = ATHENEO_TEAMS_CONFIG.api.baseUrl;
  let endpoint = ATHENEO_TEAMS_CONFIG.api.endpoints[endpointKey];

  if (!endpoint) {
    console.error(`Endpoint "${endpointKey}" not found`);
    return null;
  }

  // Remplacer les paramètres :id, :name, etc.
  Object.keys(params).forEach(key => {
    endpoint = endpoint.replace(`:${key}`, params[key]);
  });

  return `${baseUrl}${endpoint}`;
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ATHENEO_TEAMS_CONFIG,
    getTeamsConfig,
    buildEndpoint
  };
}
