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
  "Kubernetes": {
    slug: "kubernetes",
    icon: "/icons/kubernetes.svg",
    items: [
      {
        dirItems: {
          "K8s Main Components": {
            icon: "/icons/kubernetes.svg",
            slug: "k8s-main-components",
            items: [
              {
                label: "What is a Pod?",
                slug: "what-is-a-pod",
              },
              {
                label: "Pod Lifecycle",
                slug: "pod-lifecycle",
              },
              {
                label: "Pod Networking",
                slug: "pod-networking",
              },
              {
                label: "Pod Security",
                slug: "pod-security",
              },
            ]
          }
        }
      },
      {
        label: "K8s Services",
        slug: "k8s-services",
      }
    ]
  }

};
