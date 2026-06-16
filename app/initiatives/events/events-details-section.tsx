"use client"

import { eventdetails } from "@/constants"
import Image from "next/image"
import React, { useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import Breadcrumb from "@/components/ui/breadcrumb"
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5"

const EventsPageClient = () => {
    const sortedEvents = [...eventdetails].reverse()

    // FIXED: Changed generic type from string to number to align with your numerical event IDs
    const [openSheetId, setOpenSheetId] = useState<number | null>(null)

    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "App", link: "/" },
        { label: "Events", active: true },
    ]

    const handleNextEvent = (currentIndex: number) => {
        if (currentIndex < sortedEvents.length - 1) {
            setOpenSheetId(sortedEvents[currentIndex + 1].id)
        } else {
            setOpenSheetId(sortedEvents[0].id)
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center bg-neutral-50">
            <Breadcrumb
                title="Events"
                subtitle={`Discover CAIES Foundation events including workshops, training programs, seminars, and industry-focused learning initiatives.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <div className="flex w-full flex-col items-center justify-between px-4 py-6 md:max-w-6xl">
                {/* Desktop View */}
                <div className="hidden w-full flex-col gap-5 md:flex">
                    {sortedEvents.map((event) => (
                        <Dialog key={`desktop-${event.id}`}>
                            <DialogTrigger asChild>
                                <div className="grid cursor-pointer grid-cols-12 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300">
                                    <div className="col-span-1 flex items-center justify-center">
                                        <div className="border-primary text-primary flex size-14 items-center justify-center rounded-full border">
                                            <IoCalendarOutline className="size-6" />
                                        </div>
                                    </div>

                                    <div className="col-span-4 flex items-center py-8 pr-4">
                                        <h3 className="line-clamp-3 text-2xl leading-tight font-bold text-neutral-900">
                                            {event.title}
                                        </h3>
                                    </div>

                                    <div className="col-span-2 flex flex-col justify-center">
                                        <span className="font-mono text-base font-medium text-neutral-700">
                                            {event.year}
                                        </span>
                                    </div>

                                    <div className="col-span-3 flex flex-col justify-center py-8 pr-6">
                                        <p className="line-clamp-4 text-sm leading-relaxed text-neutral-500">
                                            {event.description}
                                        </p>
                                    </div>

                                    <div className="col-span-2 p-4">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={320}
                                            height={220}
                                            className="h-44 w-full rounded-xl object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </DialogTrigger>

                            <DialogContent className="h-[80vh] max-w-5xl overflow-hidden border-none bg-white p-0">
                                <div className="relative grid h-full max-h-[80vh] md:grid-cols-2">
                                    <div className="flex h-full flex-col justify-center overflow-hidden bg-white p-8">
                                        <div className="h-full max-h-[calc(80vh-64px)] overflow-hidden rounded-2xl">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                width={600}
                                                height={600}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative flex h-full flex-col overflow-hidden overflow-y-auto bg-white p-8">
                                        <div className="mb-4 flex items-center justify-between">
                                            <p className="text-sm font-semibold text-neutral-500">
                                                Event Details
                                            </p>
                                        </div>

                                        <h2 className="text-xl leading-tight font-black text-neutral-900">
                                            {event.title}
                                        </h2>

                                        <div className="mt-6 flex shrink-0 items-center gap-6 border-b border-neutral-200 pb-5">
                                            <div className="flex items-center gap-2 text-neutral-600">
                                                <IoCalendarOutline className="text-primary size-5" />
                                                <span className="font-mono text-sm">
                                                    {event.year}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-neutral-600">
                                                <IoLocationOutline className="text-primary size-5" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex-1 space-y-5">
                                            <p className="text-base leading-relaxed text-neutral-600">
                                                {event.description}
                                            </p>
                                        </div>
                                        <div className="mt-20 flex-1 space-y-5" />

                                        <div className="fixed bottom-0 w-full shrink-0 overflow-hidden bg-white py-3">
                                            <DialogClose asChild>
                                                <button className="h-12 w-40 cursor-pointer rounded-sm bg-neutral-900 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
                                                    Close
                                                </button>
                                            </DialogClose>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="flex w-full flex-col gap-4 md:hidden">
                    {sortedEvents.map((event, index) => (
                        <Sheet
                            key={`mobile-${event.id}`}
                            open={openSheetId === event.id}
                            onOpenChange={(open) =>
                                setOpenSheetId(open ? event.id : null)
                            }>
                            <SheetTrigger asChild>
                                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={500}
                                        height={208}
                                        className="h-52 w-full object-cover object-top"
                                    />
                                    <div className="space-y-4 p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-12 items-center justify-center rounded-full border border-orange-500 text-orange-500">
                                                <span className="flex size-12 items-center justify-center">
                                                    <IoCalendarOutline />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-mono text-sm font-medium text-neutral-600">
                                                    {event.year}
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="line-clamp-4 text-base leading-tight font-bold text-balance text-neutral-900">
                                            {event.title}
                                        </h3>
                                        <p className="line-clamp-3 text-sm leading-tight text-neutral-500">
                                            {event.description}
                                        </p>
                                        <button className="bg-primary flex h-12 w-full items-center justify-center rounded-sm text-sm font-medium text-white">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </SheetTrigger>

                            <SheetContent
                                side="bottom"
                                className="h-[95vh] rounded-t-4xl border-none bg-white p-0">
                                <div className="mx-auto my-3 h-5 w-12 rounded-full" />
                                <div className="h-full overflow-y-auto">
                                    <SheetHeader className="px-5 pt-5">
                                        <SheetTitle className="text-left text-xl font-bold">
                                            Event Details
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="px-5 pb-32">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={500}
                                            height={256}
                                            className="mt-4 h-64 w-full rounded-2xl object-cover object-center"
                                        />
                                        <div className="mt-6 space-y-4">
                                            <h2 className="text-lg leading-tight font-bold text-balance text-neutral-900">
                                                {event.title}
                                            </h2>
                                            <div className="flex items-center gap-6 border-b border-neutral-200 pb-4 text-sm text-neutral-500">
                                                <div className="flex items-center gap-2">
                                                    <span>
                                                        <IoCalendarOutline className="size-5" />
                                                    </span>
                                                    <span className="font-mono font-medium">
                                                        {event.year}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span>
                                                        <IoLocationOutline className="size-5" />
                                                    </span>
                                                    <span className="font-medium">
                                                        {event.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-base leading-normal text-neutral-600">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="fixed right-0 bottom-0 left-0 border-t border-neutral-200 bg-white p-4">
                                        <div className="flex gap-3">
                                            <SheetClose asChild>
                                                <button className="h-12 flex-1 rounded-sm border border-neutral-300 bg-white text-sm font-medium">
                                                    Close
                                                </button>
                                            </SheetClose>
                                            <button
                                                onClick={() =>
                                                    handleNextEvent(index)
                                                }
                                                className="h-12 flex-1 rounded-sm bg-orange-500 text-sm font-medium text-white">
                                                View Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default EventsPageClient
