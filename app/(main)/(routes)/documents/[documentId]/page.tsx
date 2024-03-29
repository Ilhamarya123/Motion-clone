"use client";


import { useQuery } from "convex/react";

import {api} from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Tollbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";



interface DocumentPageProps {
    params: {
        documentId: Id<"documents">;
    };
};



const DocumentPage = ({
    params
}: DocumentPageProps) => {

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    if (document === undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (document === null) {
        return <div>Not Found</div>
    }

     


    return ( 
        <div className="pb-40">
            <Cover />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
             <Tollbar initialData={document}/>
            </div>
        </div>
     )
}
 
export default DocumentPage;
