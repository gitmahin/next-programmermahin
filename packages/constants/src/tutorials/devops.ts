import { TutorialNavItemType } from "./type";

export const DEVOPS_TUTORIALS: TutorialNavItemType = {
  "Introduction to DevOps": {
    slug: "introduction-to-devops",
    items: [
      {
        label: "What is DevOps?",
        slug: "what-is-devops",
      },
      {
        label: "DevOps vs traditional SDLC",
        slug: "devops-vs-traditional-sdlc",
      },
      {
        label: "Key DevOps principle",
        slug: "key-devops-principles",
      },
    ],
  },
  "Linux & Command Line": {
    slug: "linux-command-line",
    icon: "/icons/linux.svg",
    items: [
      {
        label: "Basic commands, file navigation",
        slug: "linux-basic-commands-navigation",
      },
      {
        label: "Permissions, services, process management",
        slug: "linux-permissions-services-processes",
      },
    ],
  },
  "Networking Basics": {
    slug: "networking-basics",
    icon: "/icons/network.svg",
    items: [
      {
        label: "IP, DNS, HTTP/S, ports",
        slug: "networking-ip-dns-http-ports",
      },
      {
        label: "Firewall, load balancers, proxies",
        slug: "networking-firewall-loadbalancer-proxy",
      },
      {
        label: "Public vs private networks",
        slug: "networking-public-vs-private",
      },
    ],
  },
  Kubernetes: {
    slug: "kubernetes",
    icon: "/icons/kubernetes.svg",
    items: [
      {
        dirItems: {
          "K8s Main Components": {
            slug: "k8s-main-components",
            items: [
              {
                label: "K8s Pod",
                slug: "k8s-pod",
              },
              {
                label: "K8s-service",
                slug: "k8s-service",
              },
              {
                label: "K8s Ingress",
                slug: "k8s-ingress",
              },
              {
                label: "ConfigMap & Secrets",
                slug: "k8s-configmap-secrets",
              },
              {
                label: "K8s Volumes",
                slug: "k8s-volumes",
              },
              {
                label: "K8s Deployments",
                slug: "k8s-deployments",
              },
              {
                label: "K8s StatefulSets & StateLess",
                slug: "k8s-statefulsets-and-stateless",
              },
            ],
          },
        },
      },
      {
        dirItems: {
          "K8s Architecture": {
            slug: "k8s-architecture",
            items: [
              {
                label: "K8s Cluster",
                slug: "k8s-cluster",
              },
              {
                label: "Master Node",
                slug: "k8s-master-node",
              },
            ],
          },
        },
      },
      {
        label: "K8s Services",
        slug: "k8s-services",
      },
    ],
  },
};
