import { CustomMetadata } from "@/types"
import EventsPageClient from "./events-details-section"

export const metadata: CustomMetadata = {
    title: "Events",
    description:
        "Discover CAIES Foundation events including workshops, training programs, seminars, and industry-focused learning initiatives",
    alternates: {
        canonical: "/initiatives/events",
        languages: {
            "en-US": "/initiatives/events",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Events",
        description:
            "Discover CAIES Foundation events including workshops, training programs, seminars, and industry-focused learning initiatives",
        url: "https://caienvsus.org/initiatives/events",
        siteName: "CAIES Fondation",
        images: [
            {
                url: "/assets/img/page-header-bg.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function EventsPage() {
    return <EventsPageClient />
}
