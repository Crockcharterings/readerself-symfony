<?php
namespace Readerself\CoreBundle\Repository;

use Readerself\CoreBundle\Repository\AbstractRepository;
use Readerself\CoreBundle\Entity\Component;

class ItemRepository extends AbstractRepository
{
    public function getOne($parameters = []) {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder();
        $query->addSelect('fed');
        $query->from('ReaderselfCoreBundle:Feed', 'fed');

        if(isset($parameters['id']) == 1) {
            $query->andWhere('cmp.id = :id');
            $query->setParameter(':id', $parameters['id']);
        }

        $getQuery = $query->getQuery();
        $getQuery->setMaxResults(1);

        if(isset($parameters['active']) == 1 && $parameters['active'] == true && $this->cacheAvailable()) {
            $cacheDriver = new \Doctrine\Common\Cache\ApcuCache();
            $cacheDriver->setNamespace('readerself_feed_');
            $getQuery->setResultCacheDriver($cacheDriver);
            $getQuery->setResultCacheLifetime(86400);
        }
        return $getQuery->getOneOrNullResult();
    }

    public function getList($parameters = []) {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder();
        $query->addSelect('itm');
        $query->from('ReaderselfCoreBundle:Item', 'itm');
        //$query->leftJoin('ReaderselfCoreBundle:Item', 'itm');

        $query->addOrderBy('itm.date', 'DESC');
        $query->groupBy('itm.id');
        $query->setMaxResults(20);

        $getQuery = $query->getQuery();

        if(isset($parameters['active']) == 1 && $parameters['active'] == true && $this->cacheAvailable()) {
            $cacheDriver = new \Doctrine\Common\Cache\ApcuCache();
            $cacheDriver->setNamespace('readerself_feed_');
            $getQuery->setResultCacheDriver($cacheDriver);
            $getQuery->setResultCacheLifetime(86400);
        }
        return $getQuery->getResult();
    }
}
