---
title: "Homelab d'Entreprise Sécurisé"
date: 2026-11-06
description: "Simulation complète d'une infrastructure SI d'entreprise avec pfSense, Active Directory, DNS et DHCP sous VirtualBox."
tags: ["SysAdmin", "Networking", "Security", "Active Directory", "pfSense"]
---

# Simulation de Système d'Information d'Entreprise Sécurisé

## Introduction
Dans le cadre de mon portfolio et de l'approfondissement de mes compétences en administration système, réseau et cybersécurité, j'ai conçu et déployé de A à Z une infrastructure de réseau d'entreprise virtualisée. Ce projet simule l'environnement technique d'une PME/ETI en conditions réelles.

---

## 🏗️ Architecture Technique
[ Internet / WAN ]
│ (NAT)
▼
┌───────────────┐
│ pfSense (FW) │ ──► WAN : 10.0.2.15
│ │ ──► LAN : 192.168.1.1 (Passerelle)
└───────┬───────┘
│
│ Réseau Interne (LAN-Enterprise)
│
▼
┌───────────────┐
│ Windows Server│ ──► SRV-AD02 (yandeglobal.local)
│ 2019 │ ──► IP Statique : 192.168.1.10
│ (AD / DNS) │ ──► Rôles : AD DS, DNS, DHCP (192.168.1.100-200)
└───────────────┘

---

## 🛠️ Composants & Réalisations

1. **Hyperviseur & Virtualisation (VirtualBox)** :
   - Optimisation des paramètres matériels et de la paravirtualisation (KVM) pour s'adapter aux ressources de l'hôte.
   - Création d'un commutateur virtuel en **Réseau Interne** (`LAN-Enterprise`) pour cloisonner le trafic de l'entreprise.

2. **Sécurité Périmétrique (pfSense CE)** :
   - Déploiement du pare-feu open-source pfSense.
   - Configuration des interfaces WAN (accès Internet via l'hôte) et LAN (passerelle de sécurité locale `192.168.1.1`).
   - Sécurisation de l'accès administrateur et de la configuration des services de routage.

3. **Annuaire & IAM (Windows Server 2019)** :
   - Configuration d'une adresse IP statique (`192.168.1.10`) et liaison au DNS de pfSense.
   - Installation et promotion du serveur en **Contrôleur de Domaine Active Directory** (`yandeglobal.local`).
   - Création et gestion d'unités d'organisation, de groupes et de comptes utilisateurs de test (`jdupont`).

4. **Services Réseau Core (DNS & DHCP)** :
   - Mise en place du service DNS intégré à l'Active Directory.
   - Configuration et autorisation du serveur DHCP Windows pour distribuer automatiquement les baux d'adresses IP (`192.168.1.100` à `192.168.1.200`) ainsi que la passerelle et les serveurs DNS aux clients connectés au réseau.

---

## 🎯 Compétences Démontrées
- **Administration Réseau** : Routage, NAT, segmentation, baux DHCP, résolution DNS.
- **Sécurité & Pare-feu** : Filtrage périmétrique, isolation de réseaux virtuels.
- **Gestion des Identités (IAM)** : Active Directory, création de domaines, gestion des utilisateurs et rôles serveurs.
- **Résolution d'incidents (Troubleshooting)** : Diagnostic de connectivité par `ping`, résolution de conflits de virtualisation sous Windows 11.
