<?php
namespace Readerself\CoreBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;

use Readerself\CoreBundle\Controller\AbstractController;
use Readerself\CoreBundle\Manager\FeedManager;

use Readerself\CoreBundle\Form\Type\FeedType;

class FeedController extends AbstractController
{
    protected $feedManager;

    public function __construct(
        FeedManager $feedManager
    ) {
        $this->feedManager = $feedManager;
    }

    /**
     * Retrieve all feeds.
     *
     * @ApiDoc(
     *     section="Feed",
     *     headers={
     *         {"name"="X-CONNECTION-TOKEN","required"=true},
     *     },
     * )
     */
    public function indexAction(Request $request)
    {
        $data = [];
        $data['entity'] = 'Feed';
        $data['entries'] = [];
        foreach($this->feedManager->getList() as $feed) {
            $data['entries'][] = $feed->toArray();
        }
        return new JsonResponse($data);
    }

    /**
     * Create a feed.
     *
     * @ApiDoc(
     *     section="Feed",
     *     headers={
     *         {"name"="X-CONNECTION-TOKEN","required"="true"},
     *     },
     *     parameters={
     *         {"name"="title", "dataType"="string", "required"=false},
     *         {"name"="link", "dataType"="string", "required"=true},
     *         {"name"="website", "dataType"="string", "required"=false},
     *     },
     * )
     */
    public function createAction(Request $request)
    {
    }

    /**
     * Retrieve a feed.
     *
     * @ApiDoc(
     *     section="Feed",
     *     headers={
     *         {"name"="X-CONNECTION-TOKEN","required"=true},
     *     },
     * )
     */
    public function readAction(Request $request, $id)
    {
    }

    /**
     * Update a feed.
     *
     * @ApiDoc(
     *     section="Feed",
     *     headers={
     *         {"name"="X-CONNECTION-TOKEN","required"="true"},
     *     },
     *     parameters={
     *         {"name"="title", "dataType"="string", "required"=false},
     *         {"name"="link", "dataType"="string", "required"=true},
     *         {"name"="website", "dataType"="string", "required"=false},
     *     },
     * )
     */
    public function updateAction(Request $request, $id)
    {
        $data = [];

        $form = $this->createForm(FeedType::class, $this->feedManager->getOne(['id' => $id]));

        $form->submit($request->request->all(), false);

        if($form->isValid()) {
            $this->feedManager->persist($form->getData());

        } else {
            $errors = $form->getErrors(true);
            foreach($errors as $error) {
                $data['errors'][$error->getOrigin()->getName()] = $error->getMessage();
            }
        }

        $data['entity'] = 'Feed';
        $data['entry'] = $this->feedManager->getOne(['id' => $id])->toArray();

        return new JsonResponse($data);
    }

    /**
     * Delete a feed.
     *
     * @ApiDoc(
     *     section="Feed",
     *     headers={
     *         {"name"="X-CONNECTION-TOKEN","required"=true},
     *     },
     * )
     */
    public function deleteAction(Request $request, $id)
    {
        $data = [];
        $data['entity'] = 'Feed';
        $data['entry'] = $this->feedManager->getOne(['id' => $id])->toArray();

        return new JsonResponse($data);
    }
}
