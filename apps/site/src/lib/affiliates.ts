export interface AffiliateOffer {
  label: string;
  url: string;
  provider: string;
}

export interface EntryContext {
  data?: {
    type?: string;
    categories?: string[];
  };
  type?: string;
  categories?: string[];
}

export const AFFILIATE_OFFERS: Record<'vps' | 'n8n', AffiliateOffer> = {
  vps: {
    label: '☁️ Deploy 24/7 on Cloud VPS ($20 Credit)',
    url: 'https://hetzner.cloud/?ref=ai-radar',
    provider: 'Hetzner / Railway',
  },
  n8n: {
    label: '⚡ Automate with n8n Cloud',
    url: 'https://n8n.io/?ref=ai-radar',
    provider: 'n8n',
  },
};

/**
 * Returns contextual affiliate deployment offer based on entry type and categories.
 *
 * - productivity-ops or workflow tools -> n8n Cloud automation
 * - mcp_server / agent_tool (and general default) -> 24/7 Cloud VPS ($20 credit)
 */
export function getAffiliateOffer(
  entryOrType?: EntryContext | string | null,
  categoriesOrUndefined?: string[]
): AffiliateOffer {
  let detectedType: string | undefined;
  let categories: string[] = [];

  if (typeof entryOrType === 'string') {
    detectedType = entryOrType;
    categories = categoriesOrUndefined || [];
  } else if (entryOrType && typeof entryOrType === 'object') {
    if ('data' in entryOrType && entryOrType.data) {
      detectedType = entryOrType.data.type;
      categories = entryOrType.data.categories || [];
    } else {
      detectedType = entryOrType.type;
      categories = entryOrType.categories || [];
    }
  }

  const isWorkflow =
    categories.includes('productivity-ops') ||
    categories.some(
      (cat) =>
        cat.toLowerCase().includes('workflow') ||
        cat.toLowerCase().includes('automation')
    );

  if (isWorkflow) {
    return AFFILIATE_OFFERS.n8n;
  }

  // By default, for mcp_server, agent_tool, and self-hostable resources:
  // Hetzner / Railway 24/7 Cloud VPS offer
  if (detectedType === 'mcp_server' || detectedType === 'agent_tool') {
    return AFFILIATE_OFFERS.vps;
  }

  return AFFILIATE_OFFERS.vps;
}
